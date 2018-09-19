/**
 * 初始化模态框组件
 * 模态框的ID:
 * $('#Modal');
 * $('#ModalLabel');标题
 * $('#ModalBody');正文内容
 * $('#ModalFooter');页脚的按钮区
 */
function initModal() {
    var $body = $('body');
    // 模态框对象
    var modal = '<div id="Modal"></div>';
    $body.append(modal);
    // --------------------------------------------------------------------------
    var $modal = $('#Modal');
    // 添加样式
    $modal.addClass('modal').addClass('fade');
    // 添加属性
    $modal.attr('tabindex', '-1').attr('role', 'dialog').attr('aria-labelledby', 'ModalLabel');
    // --------------------------------------------------------------------------
    // DialogDiv
    var modalDialogDiv = '<div id="Modal-dialog"></div>';
    $modal.append(modalDialogDiv);
    // --------------------------------------------------------------------------
    var $modalDialogDiv = $('#Modal-dialog');
    // 添加样式
    $modalDialogDiv.addClass('modal-dialog');
    // 添加属性
    $modalDialogDiv.attr('role', 'document');
    // --------------------------------------------------------------------------
    var modalContentDiv = '<div id="Modal-content"></div>';
    $modalDialogDiv.append(modalContentDiv);
    var $modalContentDiv = $('#Modal-content');
    // 添加样式
    $modalContentDiv.addClass('modal-content');
    // --------------------------------------------------------------------------
    var modalHeaderDiv = '<div id="Modal-header"></div>';
    $modalContentDiv.append(modalHeaderDiv);
    var $$modalHeaderDiv = $('#Modal-header');
    // 添加样式
    $$modalHeaderDiv.addClass('modal-header');
    // --------------------------------------------------------------------------
    var modalHeaderButton = '<button id="Modal-Header-button" type="button"></button>';
    $$modalHeaderDiv.append(modalHeaderButton);

    var $modalHeaderButton = $('#Modal-Header-button');
    // 添加样式
    $modalHeaderButton.addClass('close');
    // 添加属性
    $modalHeaderButton.attr('data-dismiss', 'modal').attr('aria-label', 'Close');
    // --------------------------------------------------------------------------
    var modalHeaderCloseSpan = '<span id="Modal-Header-Button-span">&times;</span>';
    $modalHeaderButton.append(modalHeaderCloseSpan);

    var $modalHeaderCloseSpan = $('#Modal-Header-Button-span');
    // 添加属性
    $modalHeaderCloseSpan.attr('aria-hidden', 'true');
    // ------------------------ModalLabel----------------------------------------
    var modalHeaderTitle = '<h4 id="ModalLabel"></h4>';
    $$modalHeaderDiv.append(modalHeaderTitle);

    var $$modalHeaderTitle = $('#ModalLabel');
    // 添加样式
    $$modalHeaderTitle.addClass('modal-title');
    // --------------------------ModalBody---------------------------------------
    var modalBody = '<div id="ModalBody"></div>';
    $modalContentDiv.append(modalBody);

    var $$modalBody = $('#ModalBody');
    // 添加样式
    $$modalBody.addClass('modal-body').addClass('form-group');
    // ---------------------------ModalFooter------------------------------------
    var modalFooter = '<div id="ModalFooter"></div>';
    $modalContentDiv.append(modalFooter);

    var $$modalFooter = $('#ModalFooter');
    // 添加样式
    $$modalFooter.addClass('modal-footer');
}

/**
 * 调用该方法能够从body页面上移除模态框
 */
function destroyModal() {
    $('#Modal').remove();
}

/**
 * 调用该方法能够清除模态框
 * 标题和正文内容以及页脚的按钮
 */
function cleanData() {
    flushModal('', '', '');
}

/**
 * 传入一个文本变量,例如:
 * var title = '我是标题';
 * var body = '<input type="text" class="xxx" id="xxx"/>';
 * var footer = '<button type="button" class="close" value="Close"></button>' +
 *              '<button type="button" class="xxx" value="Submit"></button>';
 * flushModal(title,body,footer);
 * 警告!只有调用过initModal()方法才能调用该方法
 * 警告!
 * 调用toggleModal方法显示/隐藏模态框
 * toggleModal();
 * @param title 标题,需要传入标题文本
 * @param body 正文,需要传入正文文本
 * @param footer 页脚,可以传入按钮等
 */
function flushModal(title, body, footer) {
    $('#ModalLabel').html(title);
    $('#ModalBody').html(body);
    $('#ModalFooter').html(footer);
}

/**
 * 可以显示/隐藏模态框
 */
function toggleModal() {
    var $modal = $('#Modal');
    $modal.modal('toggle');
}