<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends MY_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        //EXAMPLE :
        // $this->template->title('Product List RedAdmin IMS');
        // $this->setTitlePage(); // untuk title pada body
        // $this->template->set_breadcrumb('list');
        // //load assets
        // $this->assetsBuild(array('select2', 'icheck', 'moment', 'tempusdominus', 'sweetalert', 'datatables'));

        // $this->setJs();
        // $this->template->build('v_product');
    }
}