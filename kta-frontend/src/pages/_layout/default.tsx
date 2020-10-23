import React from 'react';

import {
  ContentScroll,
  Container,
  SideMenu,
  Header,
  SubHeader,
  Main,
  Footer,
} from './styles';

import logoLight from '../../assets/logo-light.png';
import angleDoubleLeft from '../../assets/angle-double-left.svg';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <SideMenu>
        <div id="side-menu-header">
          <img src={logoLight} alt="logo" />
          <img src={angleDoubleLeft} alt="logo_nav" />
        </div>
        <div id="side-menu-content">
          <ContentScroll>
            <ul>
								<li >
									<a href="index.html" >
										<i class="menu-icon flaticon2-architecture-and-city"></i>
										<span class="menu-text">Dashboard</span>
									</a>
								</li>
								<li class="menu-section">
									<h4 class="menu-text">Custom</h4>
									<i class="menu-icon ki ki-bold-more-hor icon-md"></i>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-telegram-logo"></i>
										<span class="menu-text">Applications</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Applications</span>
												</span>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Users</span>
													<span class="menu-label">
														<span class="label label-rounded label-primary">6</span>
													</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/user/list-default.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Default</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/user/list-datatable.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Datatable</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/user/list-columns-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 1</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/user/list-columns-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/user/add-user.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Add User</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/user/edit-user.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Edit User</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Profile</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Profile 1</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/apps/profile/profile-1/overview.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Overview</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/profile/profile-1/personal-information.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Personal Information</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/profile/profile-1/account-information.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Account Information</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/profile/profile-1/change-password.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Change Password</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/profile/profile-1/email-settings.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Email Settings</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li >
															<a href="custom/apps/profile/profile-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Profile 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/profile/profile-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Profile 3</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/profile/profile-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Profile 4</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Contacts</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/contacts/list-columns.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/contacts/list-datatable.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Datatable</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/contacts/view-contact.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">View Contact</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/contacts/add-contact.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Add Contact</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/contacts/edit-contact.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Edit Contact</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Projects</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/projects/list-columns-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 1</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/list-columns-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/list-columns-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 3</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/list-columns-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Columns 4</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/list-datatable.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">List - Datatable</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/view-project.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">View Project</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/add-project.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Add Project</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/projects/edit-project.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Edit Project</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Support Center</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/support-center/home-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Home 1</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/home-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Home 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/faq-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">FAQ 1</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/faq-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">FAQ 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/faq-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">FAQ 3</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/feedback.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Feedback</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/support-center/license.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">License</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Chat</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/chat/private.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Private</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/chat/group.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Group</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/chat/popup.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Popup</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Todo</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/todo/tasks.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Tasks</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/todo/docs.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Docs</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/todo/files.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Files</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Education</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">School</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/apps/education/school/dashboard.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Dashboard</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/school/statistics.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Statistics</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/school/calendar.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Calendar</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/school/library.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Library</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/school/teachers.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Teachers</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/school/students.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Students</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Student</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/apps/education/student/dashboard.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Dashboard</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/student/profile.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Profile</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/student/calendar.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Calendar</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/apps/education/student/classmates.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">Classmates</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li >
															<a href="custom/apps/education/class/dashboard.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Class</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">eCommerce</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/apps/ecommerce/dashboard.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Dashboard 1</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/dashboard-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Dashboard 2</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/dashboard-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Dashboard 3</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/dashboard-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Dashboard 4</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/dashboard-5.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Dashboard 5</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/my-orders.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">My Orders</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/order-details.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Order Details</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/shopping-cart.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Shopping Cart</span>
															</a>
														</li>
														<li >
															<a href="custom/apps/ecommerce/checkout.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Checkout</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li >
												<a href="custom/apps/inbox.html" >
													<i class="menu-bullet menu-bullet-line">
														<span></span>
													</i>
													<span class="menu-text">Inbox</span>
													<span class="menu-label">
														<span class="label label-danger label-inline">new</span>
													</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-laptop"></i>
										<span class="menu-text">Pages</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Pages</span>
												</span>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Login</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/pages/login/login-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Login 1</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/login/login-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Login 2</span>
															</a>
														</li>
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Login 3</span>
																<span class="menu-label">
																	<span class="label label-inline label-info">Wizard</span>
																</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/pages/login/login-3/signup.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Sign Up</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/login-3/signin.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Sign In</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/login-3/forgot.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Forgot Password</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Login 4</span>
																<span class="menu-label">
																	<span class="label label-inline label-info">Wizard</span>
																</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/pages/login/login-4/signup.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Sign Up</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/login-4/signin.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Sign In</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/login-4/forgot.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Forgot Password</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Classic</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="custom/pages/login/classic/login-1.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 1</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/classic/login-2.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 2</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/classic/login-3.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 3</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/classic/login-4.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 4</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/classic/login-5.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 5</span>
																		</a>
																	</li>
																	<li >
																		<a href="custom/pages/login/classic/login-6.html" >
																			<i >
																				<span></span>
																			</i>
																			<span class="menu-text">Login 6</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Wizard</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/pages/wizard/wizard-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 1</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/wizard/wizard-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 2</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/wizard/wizard-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 3</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/wizard/wizard-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 4</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/wizard/wizard-5.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 5</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/wizard/wizard-6.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Wizard 6</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Pricing Tables</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/pages/pricing/pricing-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Pricing Tables 1</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/pricing/pricing-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Pricing Tables 2</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/pricing/pricing-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Pricing Tables 3</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/pricing/pricing-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Pricing Tables 4</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Invoices</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/pages/invoices/invoice-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 1</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/invoices/invoice-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 2</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/invoices/invoice-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 3</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/invoices/invoice-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 4</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/invoices/invoice-5.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 5</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/invoices/invoice-6.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Invoice 6</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Error</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="custom/pages/error/error-1.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 1</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/error/error-2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 2</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/error/error-3.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 3</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/error/error-4.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 4</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/error/error-5.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 5</span>
															</a>
														</li>
														<li >
															<a href="custom/pages/error/error-6.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Error 6</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-section">
									<h4 class="menu-text">Layout</h4>
									<i class="menu-icon ki ki-bold-more-hor icon-md"></i>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-contract"></i>
										<span class="menu-text">Themes</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Themes</span>
												</span>
											</li>
											<li >
												<a href="layout/themes/aside-light.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Light Aside</span>
												</a>
											</li>
											<li >
												<a href="layout/themes/header-dark.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Dark Header</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu menu-item-here menu-item-open" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-browser-2"></i>
										<span class="menu-text">Subheaders</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu" kt-hidden-height="200" style="">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Subheaders</span>
												</span>
											</li>
											<li >
												<a href="layout/subheader/toolbar.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Toolbar Nav</span>
												</a>
											</li>
											<li >
												<a href="layout/subheader/actions.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Actions Buttons</span>
												</a>
											</li>
											<li >
												<a href="layout/subheader/tabbed.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tabbed Nav</span>
												</a>
											</li>
											<li class="menu-item menu-item-active" aria-haspopup="true">
												<a href="layout/subheader/classic.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Classic</span>
												</a>
											</li>
											<li >
												<a href="layout/subheader/none.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">None</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-console"></i>
										<span class="menu-text">General</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">General</span>
												</span>
											</li>
											<li >
												<a href="layout/general/fluid-content.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Fluid Content</span>
												</a>
											</li>
											<li >
												<a href="layout/general/minimized-aside.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Minimized Aside</span>
												</a>
											</li>
											<li >
												<a href="layout/general/no-aside.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">No Aside</span>
												</a>
											</li>
											<li >
												<a href="layout/general/empty-page.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Empty Page</span>
												</a>
											</li>
											<li >
												<a href="layout/general/fixed-footer.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Fixed Footer</span>
												</a>
											</li>
											<li >
												<a href="layout/general/no-header-menu.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">No Header Menu</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li >
									<a target="_blank" href="https://preview.keenthemes.com/metronic/demo1/builder.html" >
										<i class="menu-icon flaticon2-expand"></i>
										<span class="menu-text">Builder</span>
									</a>
								</li>
								<li class="menu-section">
									<h4 class="menu-text">CRUD</h4>
									<i class="menu-icon ki ki-bold-more-hor icon-md"></i>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-cube"></i>
										<span class="menu-text">Forms</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Forms</span>
												</span>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Form Controls</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/forms/controls/base.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Base Inputs</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/controls/input-group.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Input Groups</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/controls/checkbox.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Checkbox</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/controls/radio.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Radio</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/controls/switch.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Switch</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/controls/option.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Mega Options</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Form Widgets</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/forms/widgets/bootstrap-datetimepicker.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Datetimepicker</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-datepicker.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Datepicker</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-timepicker.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Timepicker</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-daterangepicker.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Daterangepicker</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/tagify.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Tagify</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-touchspin.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Touchspin</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-maxlength.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Maxlength</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-switch.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Switch</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-multipleselectsplitter.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Multiple Select Splitter</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/bootstrap-select.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Bootstrap Select</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/select2.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Select2</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/typeahead.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Typeahead</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/nouislider.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">noUiSlider</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/form-repeater.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Form Repeater</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/ion-range-slider.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Ion Range Slider</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/input-mask.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Input Masks</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/jquery-mask.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">jQuery Mask</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/autosize.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Autosize</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/clipboard.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Clipboard</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/widgets/recaptcha.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Google reCaptcha</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Form Text Editors</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/forms/editors/tinymce.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">TinyMCE</span>
															</a>
														</li>
														<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
															<a href="javascript:;" class="menu-link menu-toggle">
																<i >
																	<span></span>
																</i>
																<span class="menu-text">CKEditor</span>
																<i class="menu-arrow"></i>
															</a>
															<div class="menu-submenu">
																<i class="menu-arrow"></i>
																<ul class="menu-subnav">
																	<li >
																		<a href="crud/forms/editors/ckeditor-classic.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">CKEditor Classic</span>
																		</a>
																	</li>
																	<li >
																		<a href="crud/forms/editors/ckeditor-inline.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">CKEditor Inline</span>
																		</a>
																	</li>
																	<li >
																		<a href="crud/forms/editors/ckeditor-balloon.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">CKEditor Balloon</span>
																		</a>
																	</li>
																	<li >
																		<a href="crud/forms/editors/ckeditor-balloon-block.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">CKEditor Balloon Block</span>
																		</a>
																	</li>
																	<li >
																		<a href="crud/forms/editors/ckeditor-document.html" >
																			<i class="menu-bullet menu-bullet-line">
																				<span></span>
																			</i>
																			<span class="menu-text">CKEditor Document</span>
																		</a>
																	</li>
																</ul>
															</div>
														</li>
														<li >
															<a href="crud/forms/editors/quill.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Quill Text Editor</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/editors/summernote.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Summernote WYSIWYG</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/editors/bootstrap-markdown.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Markdown Editor</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Form Layouts</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/forms/layouts/default-forms.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Default Forms</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/layouts/multi-column-forms.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Multi Column Forms</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/layouts/action-bars.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Basic Action Bars</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/layouts/sticky-action-bar.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Sticky Action Bar</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Form Validation</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/forms/validation/states.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Validation States</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/validation/form-controls.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Form Controls</span>
															</a>
														</li>
														<li >
															<a href="crud/forms/validation/form-widgets.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Form Widgets</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-browser-2"></i>
										<span class="menu-text">KTDatatable</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">KTDatatable</span>
												</span>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Base</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/ktdatatable/base/data-local.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Local Data</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/base/data-json.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">JSON Data</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/base/data-ajax.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Ajax Data</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/base/html-table.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">HTML Table</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/base/local-sort.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Local Sort</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/base/translation.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Translation</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Advanced</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/ktdatatable/advanced/record-selection.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Record Selection</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/advanced/row-details.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Row Details</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/advanced/modal.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Modal Examples</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/advanced/column-rendering.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Column Rendering</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/advanced/column-width.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Column Width</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/advanced/vertical.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Vertical Scrolling</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Child Datatables</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/ktdatatable/child/data-local.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Local Data</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/child/data-ajax.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Remote Data</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">API</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/ktdatatable/api/methods.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">API Methods</span>
															</a>
														</li>
														<li >
															<a href="crud/ktdatatable/api/events.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Events</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-list-3"></i>
										<span class="menu-text">Datatables.net</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Datatables.net</span>
												</span>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Basic</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/datatables/basic/basic.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Basic Tables</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/basic/scrollable.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Scrollable Tables</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/basic/headers.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Complex Headers</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/basic/paginations.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Pagination Options</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Advanced</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/datatables/advanced/column-rendering.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Column Rendering</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/advanced/multiple-controls.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Multiple Controls</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/advanced/column-visibility.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Column Visibility</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/advanced/row-callback.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Row Callback</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/advanced/row-grouping.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Row Grouping</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/advanced/footer-callback.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Footer Callback</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Data sources</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/datatables/data-sources/html.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">HTML</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/data-sources/javascript.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Javascript</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/data-sources/ajax-client-side.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Ajax Client-side</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/data-sources/ajax-server-side.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Ajax Server-side</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Search Options</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/datatables/search-options/column-search.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Column Search</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/search-options/advanced-search.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Advanced Search</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">Extensions</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="crud/datatables/extensions/buttons.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Buttons</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/colreorder.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">ColReorder</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/keytable.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">KeyTable</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/responsive.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Responsive</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/rowgroup.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">RowGroup</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/rowreorder.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">RowReorder</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/scroller.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Scroller</span>
															</a>
														</li>
														<li >
															<a href="crud/datatables/extensions/select.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">Select</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-wifi"></i>
										<span class="menu-text">File Upload</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li >
												<a href="crud/file-upload/image-input.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Image Input</span>
												</a>
											</li>
											<li >
												<a href="crud/file-upload/dropzonejs.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">DropzoneJS</span>
													<span class="menu-label">
														<span class="label label-danger label-inline">new</span>
													</span>
												</a>
											</li>
											<li >
												<a href="crud/file-upload/uppy.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Uppy</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-section">
									<h4 class="menu-text">Features</h4>
									<i class="menu-icon ki ki-bold-more-hor icon-md"></i>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-copy"></i>
										<span class="menu-text">Bootstrap</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Bootstrap</span>
												</span>
											</li>
											<li >
												<a href="features/bootstrap/typography.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Typography</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/buttons.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Buttons</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/button-group.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Button Group</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/dropdown.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Dropdown</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/navs.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Navs</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/tables.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tables</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/progress.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Progress</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/modal.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Modal</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/alerts.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Alerts</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/popover.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Popover</span>
												</a>
											</li>
											<li >
												<a href="features/bootstrap/tooltip.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tooltip</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-photograph"></i>
										<span class="menu-text">Custom</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Custom</span>
												</span>
											</li>
											<li >
												<a href="features/custom/utilities.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Utilities</span>
												</a>
											</li>
											<li >
												<a href="features/custom/label.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Labels</span>
												</a>
											</li>
											<li >
												<a href="features/custom/pulse.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Pulse</span>
												</a>
											</li>
											<li >
												<a href="features/custom/line-tabs.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Line Tabs</span>
												</a>
											</li>
											<li >
												<a href="features/custom/advance-navs.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Advance Navs</span>
												</a>
											</li>
											<li >
												<a href="features/custom/timeline.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Timeline</span>
												</a>
											</li>
											<li >
												<a href="features/custom/pagination.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Pagination</span>
												</a>
											</li>
											<li >
												<a href="features/custom/symbol.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Symbol</span>
												</a>
											</li>
											<li >
												<a href="features/custom/overlay.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Overlay</span>
												</a>
											</li>
											<li >
												<a href="features/custom/spinners.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Spinners</span>
												</a>
											</li>
											<li >
												<a href="features/custom/iconbox.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Iconbox</span>
												</a>
											</li>
											<li >
												<a href="features/custom/callout.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Callout</span>
												</a>
											</li>
											<li >
												<a href="features/custom/ribbons.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Ribbons</span>
												</a>
											</li>
											<li >
												<a href="features/custom/accordions.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Accordions</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-cube-1"></i>
										<span class="menu-text">Cards</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Cards</span>
												</span>
											</li>
											<li >
												<a href="features/cards/general.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">General Cards</span>
												</a>
											</li>
											<li >
												<a href="features/cards/stacked.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Stacked Cards</span>
												</a>
											</li>
											<li >
												<a href="features/cards/tabbed.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tabbed Cards</span>
												</a>
											</li>
											<li >
												<a href="features/cards/draggable.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Draggable Cards</span>
												</a>
											</li>
											<li >
												<a href="features/cards/tools.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Cards Tools</span>
												</a>
											</li>
											<li >
												<a href="features/cards/sticky.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Sticky Cards</span>
												</a>
											</li>
											<li >
												<a href="features/cards/stretched.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Stretched Cards</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-pie-chart-4"></i>
										<span class="menu-text">Widgets</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Widgets</span>
												</span>
											</li>
											<li >
												<a href="features/widgets/lists.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Lists</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/stats.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Stats</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/charts.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Charts</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/mixed.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Mixed</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/tiles.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tiles</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/engage.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Engage</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/base-tables.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Base Tables</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/advance-tables.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Advance Tables</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/feeds.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Feeds</span>
												</a>
											</li>
											<li >
												<a href="features/widgets/nav-panels.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Nav Panels</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-start-up"></i>
										<span class="menu-text">Icons</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li >
												<a href="features/icons/svg.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">SVG Icons</span>
												</a>
											</li>
											<li >
												<a href="features/icons/custom-icons.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Custom Icons</span>
												</a>
											</li>
											<li >
												<a href="features/icons/flaticon.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Flaticon</span>
												</a>
											</li>
											<li >
												<a href="features/icons/fontawesome5.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Fontawesome 5</span>
												</a>
											</li>
											<li >
												<a href="features/icons/lineawesome.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Lineawesome</span>
												</a>
											</li>
											<li >
												<a href="features/icons/socicons.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Socicons</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-calendar-2"></i>
										<span class="menu-text">Calendar</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Calendar</span>
												</span>
											</li>
											<li >
												<a href="features/calendar/basic.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Basic Calendar</span>
												</a>
											</li>
											<li >
												<a href="features/calendar/list-view.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">List Views</span>
												</a>
											</li>
											<li >
												<a href="features/calendar/google.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Google Calendar</span>
												</a>
											</li>
											<li >
												<a href="features/calendar/external-events.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">External Events</span>
												</a>
											</li>
											<li >
												<a href="features/calendar/background-events.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Background Events</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-graph-1"></i>
										<span class="menu-text">Charts</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Charts</span>
												</span>
											</li>
											<li >
												<a href="features/charts/apexcharts.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Apexcharts</span>
												</a>
											</li>
											<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
												<a href="javascript:;" class="menu-link menu-toggle">
													<i >
														<span></span>
													</i>
													<span class="menu-text">amCharts</span>
													<i class="menu-arrow"></i>
												</a>
												<div class="menu-submenu">
													<i class="menu-arrow"></i>
													<ul class="menu-subnav">
														<li >
															<a href="features/charts/amcharts/charts.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">amCharts Charts</span>
															</a>
														</li>
														<li >
															<a href="features/charts/amcharts/stock-charts.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">amCharts Stock Charts</span>
															</a>
														</li>
														<li >
															<a href="features/charts/amcharts/maps.html" >
																<i >
																	<span></span>
																</i>
																<span class="menu-text">amCharts Maps</span>
															</a>
														</li>
													</ul>
												</div>
											</li>
											<li >
												<a href="features/charts/flotcharts.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Flot Charts</span>
												</a>
											</li>
											<li >
												<a href="features/charts/google-charts.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Google Charts</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-location"></i>
										<span class="menu-text">Maps</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Maps</span>
												</span>
											</li>
											<li >
												<a href="features/maps/google-maps.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Google Maps</span>
												</a>
											</li>
											<li >
												<a href="features/maps/leaflet.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Leaflet</span>
												</a>
											</li>
											<li >
												<a href="features/maps/jqvmap.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">JQVMap</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
									<a href="javascript:;" class="menu-link menu-toggle">
										<i class="menu-icon flaticon2-list-3"></i>
										<span class="menu-text">Miscellaneous</span>
										<i class="menu-arrow"></i>
									</a>
									<div class="menu-submenu">
										<i class="menu-arrow"></i>
										<ul class="menu-subnav">
											<li class="menu-item menu-item-parent" aria-haspopup="true">
												<span >
													<span class="menu-text">Miscellaneous</span>
												</span>
											</li>
											<li >
												<a href="features/miscellaneous/kanban-board.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Kanban Board</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/sticky-panels.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Sticky Panels</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/blockui.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Block UI</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/perfect-scrollbar.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Perfect Scrollbar</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/treeview.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Tree View</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/bootstrap-notify.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Bootstrap Notify</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/toastr.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Toastr</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/sweetalert2.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">SweetAlert2</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/dual-listbox.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Dual Listbox</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/session-timeout.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Session Timeout</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/idle-timer.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Idle Timer</span>
												</a>
											</li>
											<li >
												<a href="features/miscellaneous/cropper.html" >
													<i >
														<span></span>
													</i>
													<span class="menu-text">Cropper</span>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul></ContentScroll>
        </div>
      </SideMenu>
      <Header>Header</Header>
      <Main>
        <ContentScroll>
          <SubHeader>
            <h5>Tabbed Subheader</h5>
            <ul>
              <li>
                <a href="/#">Subheaders</a>
              </li>
              <li>
                <a href="/#">Classic</a>
              </li>
            </ul>
          </SubHeader>
          {children}
          <Footer>Footer</Footer>
        </ContentScroll>
      </Main>
    </Container>
  );
};

export default Default;
