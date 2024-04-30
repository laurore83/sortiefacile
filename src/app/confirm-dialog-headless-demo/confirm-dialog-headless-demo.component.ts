import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog-headless-demo',
  templateUrl: './confirm-dialog-headless-demo.component.html',
  styleUrl: './confirm-dialog-headless-demo.component.css',
})
export class ConfirmDialogHeadlessDemoComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm() {
    this.confirmationService.confirm({
      header: 'Are you sure?',
      message: 'Please confirm to proceed.',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
}
