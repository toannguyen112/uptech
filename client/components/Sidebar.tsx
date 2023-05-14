import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'
import { FormattedMessage } from "react-intl";
import Router, { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { adminLogout, adminProfile } from '../store/auth/authAction';

function Sidebar() {

  const { locale, asPath, pathname } = useRouter();
  const { info, token } = useAppSelector((state: any) => state.auth);
  const dispatch = useAppDispatch();

  const checkPermission = (permission: string) => {
    return info?.permissions?.includes(permission);
  }

  useEffect(() => {
    if (token) {
      dispatch(adminProfile({}));
    }

  }, [dispatch, token])

  const currentRoute = pathname;

  const activeClass = (url: string) => {
    return currentRoute.includes(url) ? 'nav-link active' : 'nav-link';
  }

  return (
    <nav className="sidebar w-[var(--sidebar-width)] ">
      <div className="flex items-center  text-center px-5 pt-5 text-white">
        <Logo />
      </div>

      <div className="flex items-center text-[#212121]  text-center px-5 pt-5">
        <div className='flex items-center justify-center space-x-[12px] text-[12px] uppercase'>
          <div className={locale === "vi" ? "text-prime text-[16px]" : "text-[16px]"}>
            <a href={`${asPath}`}>Vi</a>
          </div>
          <div className={locale === "en" ? "text-prime text-[16px]" : "text-[16px]"}>
            <a href={`/en/${asPath}`}>En</a>
          </div>
          <div className={locale === "ja" ? "text-prime text-[16px]" : "text-[16px]"}>
            <a href={`/ja/${asPath}`}>JA</a>
          </div>
        </div>
      </div>
      <div className='relative' >
        <div className="py-6 space-y-2">
          {checkPermission("dasboard") ? (
            <Link href="/admin/dashboard">
              <div className={activeClass('/admin/dashboard')}>
                <Image src="/svg/admin/sidebar/dashboard.svg" width={20} height={20} alt="" className='text-white' />
                <span>
                  <FormattedMessage id="page.sidebar.das" />
                </span>
              </div>
            </Link>
          ) : ""}

          <div className="nav-header ">
            <span>
              <FormattedMessage id="page.sidebar.content" />
            </span>
          </div>
          {
            checkPermission("banners") ? (<Link href="/admin/banners">
              <div className={activeClass('/admin/banners')}>
                <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                <span>
                  <FormattedMessage id="page.sidebar.banner" /></span>
              </div>
            </Link>) : ""
          }
          {
            checkPermission("services") ? (<Link href="/admin/services/form">
              <div className={activeClass('/admin/services')}>
                <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                <span>
                  <FormattedMessage id="page.sidebar.services" /></span>
              </div>
            </Link>) : ""
          }
          {
            checkPermission("branchs") ? (<Link href="/admin/branchs">
              <div className={activeClass('/admin/branchs')}>
                <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                <span>
                  <FormattedMessage id="page.sidebar.branchs" /></span>
              </div>
            </Link>) : ""
          }
          {
            checkPermission("projects") ? (
              <Link href="/admin/projects">
                <div className={activeClass('/admin/projects')}>
                  <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.project" /> </span>
                </div>
              </Link>
            ) : ""
          }
          {
            checkPermission("posts") ? (
              <Link href="/admin/posts">
                <div className={activeClass('/admin/posts')}>
                  <Image src="/svg/admin/sidebar/post.svg" width={20} height={20} alt="" className='text-white' />
                  <span><FormattedMessage id="page.sidebar.post" /></span>
                </div>
              </Link>
            ) : ""
          }

          {
            checkPermission("categories") ? (
              <Link href="/admin/categories">
                <div className={activeClass('/admin/categories')}>
                  <Image src="/svg/admin/sidebar/post-category.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.categories" /></span>
                </div>
              </Link>
            ) : ""
          }

          {
            checkPermission("jobs") ? (
              <Link href="/admin/jobs">
                <div className={activeClass('/admin/jobs')}>
                  <Image src="/svg/admin/sidebar/job.svg" width={20} height={20} alt="" className='text-white' />
                  <span><FormattedMessage id="page.sidebar.job" /></span>
                </div>
              </Link>
            ) : ""
          }

          {
            checkPermission("recruitments") ? (
              <Link href="/admin/recruitments">
                <div className={activeClass('/admin/recruitments')}>
                  <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.recruitments" /></span>
                </div>
              </Link>
            ) : ""
          }

          {
            checkPermission("contacts") ? (
              <Link href="/admin/contacts">
                <div className={activeClass('/admin/contacts')}>
                  <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.contacts" /></span>
                </div>
              </Link>
            ) : ""
          }
          {
            checkPermission("ceos") ? (
              <Link href="/admin/ceos">
                <div className={activeClass('/admin/ceos')}>
                  <Image src="/svg/admin/sidebar/post.svg" width={20} height={20} alt="" className='text-white' />
                  <span><FormattedMessage id="page.sidebar.ceo" /></span>
                </div>
              </Link>
            ) : ""
          }

          <div className="nav-header ">
            <span><FormattedMessage id="page.sidebar.setting" /></span>
          </div>
          {
            checkPermission("files") ? (
              <Link href="/admin/medias">
                <div className={activeClass('/admin/medias')}>
                  <Image src="/svg/admin/sidebar/media.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.folder" /></span>
                </div>
              </Link>
            ) : ""
          }

          {
            checkPermission("roles") ? (
              <Link href="/admin/roles">
                <div className={activeClass('/admin/roles')}>
                  <Image src="/svg/admin/sidebar/rule.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.role" /></span>
                </div>
              </Link>
            ) : ""
          }
          {
            checkPermission("accounts") ? (
              <Link href="/admin/accounts">
                <div className={activeClass('/admin/accounts')}>
                  <Image src="/svg/admin/sidebar/product.svg" width={20} height={20} alt="" />
                  <span><FormattedMessage id="page.sidebar.account" /></span>
                </div>
              </Link>
            ) : ""
          }

        </div>
        <div className="py-6 space-y-4"></div>
        <div className="mt-auto inset-x-0 border-t border-gray-200 absolute bottom-0">
          <div className="nav-link"
            onClick={() => {
              dispatch(adminLogout({})).then((res) => {
                Router.push("/admin/login");
              })
            }}
          >
            <Image src="/svg/admin/sidebar/logout.svg" width={20} height={20} alt="" />
            <span><FormattedMessage id="page.sidebar.logout" /></span>
          </div>
        </div>
      </div>

    </nav >
  )
}

export default Sidebar
