<?php defined('BASEPATH') or exit('No direct script access allowed');

abstract class MY_Controller extends MY_Template{
    public function __construct()
    {
        parent::__construct();
        //$this->template->set_breadcrumb(get_class($this),base_url(strtolower(get_class($this))));
        $this->load->model(get_class($this).'Model');
        //checking session
    }

    public function setJs($name = '')
    {
        if($name == ''){
            $name = $this->router->method;
        }

        $this->template->set('js', base_url().$this->config->item('js_core').strtolower(get_class($this)).'/'.$name.'.js');
    }

    protected function setTitlePage($title = '')
    {
        if($title == ''){
            $this->template->set('titlePage',get_class($this));
        }else{
            $this->template->set('titlePage',$title);
        }
    }
}