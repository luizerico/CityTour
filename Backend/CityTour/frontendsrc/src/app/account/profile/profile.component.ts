import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { EmitterService } from '../../core/emitter-service';
import { EMITTERS } from '../../core/emitter';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  account = new Account(1, '', '', '', '', '', '','');
  id: string;
  modalRef: BsModalRef;
  filesToUpload: Array<File> = [];

  constructor(
    private _accountService: AccountService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _modalService: BsModalService) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.loadAccount(sessionStorage.getItem('userId')));
  }

  ngOnChanges() {
    EmitterService.get(EMITTERS.listId).subscribe((account: Account[]) => {
      this._route.params.subscribe(params => this.loadAccount(sessionStorage.getItem('userId')));
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }


  loadAccount(id) {
    this._accountService.getAccount(id)
      .subscribe((account) => {
        this.account = account
      },
      err => console.log(err)
      );
  }

  editProfile() {
    this._router.navigate(['account-edit', sessionStorage.getItem('userId')]);
  }

  updateProfilePicture() {

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    //console.log(files);

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }

    this._accountService.updateProfilePicture(formData, sessionStorage.getItem('userId'))
      .subscribe((account) => {
        EmitterService.get(EMITTERS.listId).emit(account);
        this.modalRef.hide();
      },
      err => console.log(err)
      );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }


}
