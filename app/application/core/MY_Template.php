<?php defined('BASEPATH') or exit('No direct script access allowed');

abstract class MY_Template extends MX_Controller{
    
    protected $_css;
    protected $_js;

    public function __construct()
    {
        parent::__construct();
        //Example :
        // $this->template->set_partial('sidebar', 'adminlte/sidebar');
        // $this->template->set_partial('content-header', 'adminlte/content-header');
    }

    public function assetsBuild($asset = [])
    {
        foreach($asset as $assets){
            foreach($this->config->item('external_layout_'.$assets) as $key => $value){
                switch($key){
                    case 'css':
                        foreach($value as $data){
                            $this->_css[] = $data;
                        }
                    break;
                    case 'js':
                        foreach($value as $data){
                            $this->_js[] = $data;
                        }
                    break;
                }
            }
        }
        $this->assetsRequest();
    }

    public function assetsRequest()
    {
        $this->template->set('pageCSS',$this->_css);
        $this->template->set('pageJS',$this->_js);
    }
}