import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var PDFJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form: FormGroup;
  file: any;
  pdfLoaded = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      pdfFile: ['']
    });
  }

  onSubmit() {
    console.log('submit');
  }

  onFileChange(event) {
    // this.file = '/assets/lib/example.pdf';

    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsArrayBuffer(file);
      // reader.readAsDataURL(file);
      reader.onload = () => {
        // this.form.get('pdfFile').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // });
        this.file = reader.result;
        this.pdfLoaded = true;
        // PDFJS.createObjectURL(reader.result, 'application/pdf').then((a, b, c) => {
        //   console.log('create');
        // });
      };
    }
  }

}
