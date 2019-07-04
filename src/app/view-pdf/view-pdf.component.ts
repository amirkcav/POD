import { Component, OnInit, Input, OnChanges } from '@angular/core';

declare var index: any;
declare var jsPDF: any;
declare var margins: any;
declare var headerFooterFormatting: any;
declare var html2pdf: any;

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent implements OnInit, OnChanges {
  @Input() file: any;

  constructor() { }

  ngOnInit() {
    // index(this.file);
  }

  ngOnChanges(a: any) {
    index(this.file);
  }

  downloadPdf() {
    const element = document.getElementById('viewer');
    const worker = new html2pdf.Worker({ filename: 'abc.pdf' });
    const cece = worker.from(element);
    cece.save();
  }

  getPdfData(event) {
    // https://github.com/eKoopmans/html2pdf.js
    const element = document.getElementById('viewer');
    const worker = new html2pdf.Worker({});

      // If src is specified, perform the traditional 'simple' operation.
    const cece = worker.from(element);
    cece.toPdf().output().then((pdfContent) => {
      console.log(`got pdf content. size: ${pdfContent.length}B`);
    });
  }

}
