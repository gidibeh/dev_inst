PGDMP                         x           hr    12.1    12.1 8    I           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            J           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            K           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            L           1262    18380    hr    DATABASE     �   CREATE DATABASE hr WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE hr;
                postgres    false            �            1259    18389 	   countries    TABLE     �   CREATE TABLE public.countries (
    country_id character(2) NOT NULL,
    country_name character varying(40),
    region_id integer NOT NULL
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    18414    departments    TABLE     �   CREATE TABLE public.departments (
    department_id integer NOT NULL,
    department_name character varying(30) NOT NULL,
    location_id integer
);
    DROP TABLE public.departments;
       public         heap    postgres    false            �            1259    18412    departments_department_id_seq    SEQUENCE     �   CREATE SEQUENCE public.departments_department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.departments_department_id_seq;
       public          postgres    false    208            M           0    0    departments_department_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.departments_department_id_seq OWNED BY public.departments.department_id;
          public          postgres    false    207            �            1259    18458 
   dependents    TABLE     �   CREATE TABLE public.dependents (
    dependent_id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    relationship character varying(25) NOT NULL,
    employee_id integer NOT NULL
);
    DROP TABLE public.dependents;
       public         heap    postgres    false            �            1259    18456    dependents_dependent_id_seq    SEQUENCE     �   CREATE SEQUENCE public.dependents_dependent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.dependents_dependent_id_seq;
       public          postgres    false    214            N           0    0    dependents_dependent_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.dependents_dependent_id_seq OWNED BY public.dependents.dependent_id;
          public          postgres    false    213            �            1259    18435 	   employees    TABLE     z  CREATE TABLE public.employees (
    employee_id integer NOT NULL,
    first_name character varying(20),
    last_name character varying(25) NOT NULL,
    email character varying(100) NOT NULL,
    phone_number character varying(20),
    hire_date date NOT NULL,
    job_id integer NOT NULL,
    salary numeric(8,2) NOT NULL,
    manager_id integer,
    department_id integer
);
    DROP TABLE public.employees;
       public         heap    postgres    false            �            1259    18433    employees_employee_id_seq    SEQUENCE     �   CREATE SEQUENCE public.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.employees_employee_id_seq;
       public          postgres    false    212            O           0    0    employees_employee_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.employees_employee_id_seq OWNED BY public.employees.employee_id;
          public          postgres    false    211            �            1259    18427    jobs    TABLE     �   CREATE TABLE public.jobs (
    job_id integer NOT NULL,
    job_title character varying(35) NOT NULL,
    min_salary numeric(8,2),
    max_salary numeric(8,2)
);
    DROP TABLE public.jobs;
       public         heap    postgres    false            �            1259    18425    jobs_job_id_seq    SEQUENCE     �   CREATE SEQUENCE public.jobs_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.jobs_job_id_seq;
       public          postgres    false    210            P           0    0    jobs_job_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.jobs_job_id_seq OWNED BY public.jobs.job_id;
          public          postgres    false    209            �            1259    18401 	   locations    TABLE       CREATE TABLE public.locations (
    location_id integer NOT NULL,
    street_address character varying(40),
    postal_code character varying(12),
    city character varying(30) NOT NULL,
    state_province character varying(25),
    country_id character(2) NOT NULL
);
    DROP TABLE public.locations;
       public         heap    postgres    false            �            1259    18399    locations_location_id_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.locations_location_id_seq;
       public          postgres    false    206            Q           0    0    locations_location_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.locations_location_id_seq OWNED BY public.locations.location_id;
          public          postgres    false    205            �            1259    18383    regions    TABLE     g   CREATE TABLE public.regions (
    region_id integer NOT NULL,
    region_name character varying(25)
);
    DROP TABLE public.regions;
       public         heap    postgres    false            �            1259    18381    regions_region_id_seq    SEQUENCE     �   CREATE SEQUENCE public.regions_region_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.regions_region_id_seq;
       public          postgres    false    203            R           0    0    regions_region_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.regions_region_id_seq OWNED BY public.regions.region_id;
          public          postgres    false    202            �
           2604    18417    departments department_id    DEFAULT     �   ALTER TABLE ONLY public.departments ALTER COLUMN department_id SET DEFAULT nextval('public.departments_department_id_seq'::regclass);
 H   ALTER TABLE public.departments ALTER COLUMN department_id DROP DEFAULT;
       public          postgres    false    208    207    208            �
           2604    18461    dependents dependent_id    DEFAULT     �   ALTER TABLE ONLY public.dependents ALTER COLUMN dependent_id SET DEFAULT nextval('public.dependents_dependent_id_seq'::regclass);
 F   ALTER TABLE public.dependents ALTER COLUMN dependent_id DROP DEFAULT;
       public          postgres    false    214    213    214            �
           2604    18438    employees employee_id    DEFAULT     ~   ALTER TABLE ONLY public.employees ALTER COLUMN employee_id SET DEFAULT nextval('public.employees_employee_id_seq'::regclass);
 D   ALTER TABLE public.employees ALTER COLUMN employee_id DROP DEFAULT;
       public          postgres    false    211    212    212            �
           2604    18430    jobs job_id    DEFAULT     j   ALTER TABLE ONLY public.jobs ALTER COLUMN job_id SET DEFAULT nextval('public.jobs_job_id_seq'::regclass);
 :   ALTER TABLE public.jobs ALTER COLUMN job_id DROP DEFAULT;
       public          postgres    false    209    210    210            �
           2604    18404    locations location_id    DEFAULT     ~   ALTER TABLE ONLY public.locations ALTER COLUMN location_id SET DEFAULT nextval('public.locations_location_id_seq'::regclass);
 D   ALTER TABLE public.locations ALTER COLUMN location_id DROP DEFAULT;
       public          postgres    false    205    206    206            �
           2604    18386    regions region_id    DEFAULT     v   ALTER TABLE ONLY public.regions ALTER COLUMN region_id SET DEFAULT nextval('public.regions_region_id_seq'::regclass);
 @   ALTER TABLE public.regions ALTER COLUMN region_id DROP DEFAULT;
       public          postgres    false    203    202    203            <          0    18389 	   countries 
   TABLE DATA           H   COPY public.countries (country_id, country_name, region_id) FROM stdin;
    public          postgres    false    204   %D       @          0    18414    departments 
   TABLE DATA           R   COPY public.departments (department_id, department_name, location_id) FROM stdin;
    public          postgres    false    208   XE       F          0    18458 
   dependents 
   TABLE DATA           d   COPY public.dependents (dependent_id, first_name, last_name, relationship, employee_id) FROM stdin;
    public          postgres    false    214    F       D          0    18435 	   employees 
   TABLE DATA           �   COPY public.employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id) FROM stdin;
    public          postgres    false    212   �G       B          0    18427    jobs 
   TABLE DATA           I   COPY public.jobs (job_id, job_title, min_salary, max_salary) FROM stdin;
    public          postgres    false    210   �L       >          0    18401 	   locations 
   TABLE DATA           o   COPY public.locations (location_id, street_address, postal_code, city, state_province, country_id) FROM stdin;
    public          postgres    false    206   N       ;          0    18383    regions 
   TABLE DATA           9   COPY public.regions (region_id, region_name) FROM stdin;
    public          postgres    false    203   HO       S           0    0    departments_department_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.departments_department_id_seq', 1, false);
          public          postgres    false    207            T           0    0    dependents_dependent_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.dependents_dependent_id_seq', 1, false);
          public          postgres    false    213            U           0    0    employees_employee_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.employees_employee_id_seq', 1, false);
          public          postgres    false    211            V           0    0    jobs_job_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.jobs_job_id_seq', 1, false);
          public          postgres    false    209            W           0    0    locations_location_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.locations_location_id_seq', 1, false);
          public          postgres    false    205            X           0    0    regions_region_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.regions_region_id_seq', 1, false);
          public          postgres    false    202            �
           2606    18393    countries countries_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);
 B   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
       public            postgres    false    204            �
           2606    18419    departments departments_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (department_id);
 F   ALTER TABLE ONLY public.departments DROP CONSTRAINT departments_pkey;
       public            postgres    false    208            �
           2606    18463    dependents dependents_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.dependents
    ADD CONSTRAINT dependents_pkey PRIMARY KEY (dependent_id);
 D   ALTER TABLE ONLY public.dependents DROP CONSTRAINT dependents_pkey;
       public            postgres    false    214            �
           2606    18440    employees employees_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);
 B   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_pkey;
       public            postgres    false    212            �
           2606    18432    jobs jobs_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (job_id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public            postgres    false    210            �
           2606    18406    locations locations_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (location_id);
 B   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
       public            postgres    false    206            �
           2606    18388    regions regions_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (region_id);
 >   ALTER TABLE ONLY public.regions DROP CONSTRAINT regions_pkey;
       public            postgres    false    203            �
           2606    18394 "   countries countries_region_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_region_id_fkey;
       public          postgres    false    2728    204    203            �
           2606    18420 (   departments departments_location_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.locations(location_id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.departments DROP CONSTRAINT departments_location_id_fkey;
       public          postgres    false    206    2732    208            �
           2606    18464 &   dependents dependents_employee_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.dependents
    ADD CONSTRAINT dependents_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.dependents DROP CONSTRAINT dependents_employee_id_fkey;
       public          postgres    false    2738    212    214            �
           2606    18446 &   employees employees_department_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.departments(department_id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_department_id_fkey;
       public          postgres    false    2734    208    212            �
           2606    18441    employees employees_job_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_job_id_fkey;
       public          postgres    false    210    2736    212            �
           2606    18451 #   employees employees_manager_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_manager_id_fkey FOREIGN KEY (manager_id) REFERENCES public.employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.employees DROP CONSTRAINT employees_manager_id_fkey;
       public          postgres    false    212    2738    212            �
           2606    18407 #   locations locations_country_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(country_id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_country_id_fkey;
       public          postgres    false    206    2730    204            <   #  x�E��n�0E��_�Tj��"CZ�F������j� ǔ��wL[Xxq�f��8X!��2NJ��Yj5a,��j}��,�BKW�r] "C��f(N�]�m��\���7q�Tَ̅�X"V�#�Ő�H���a"�+L-���x&1�M#�q{�@6XR-We92S���ޑ9j�s��9�p*א�i�\n�Tg��y�<E�e�u"�r����,(R�4t�bI)Q�T=��ֽ?�,��Sè�w��j�����^�Q�nKۓ�b����-������_�;~<	!~ Q�v�      @   �   x�=N��0�O��/0Apd��`b�ѥ�Fn,������bt<�#��{r�ä��2�㨦�	��5+��;�g&Y
�c���l������K���l+�q�@&�⊛%�	;Oq"�h�M�d�`�6:z��̰#���a�F�!��r]
!>v�6�      F   �  x�E�͎�0��ç��b���f7H�E��@�c��PE
d;E����|4?���`/A|<���j�o`�)Y|w�ol���B�AE�|��%�jA%���%	;���QRa���źm9edh�����^�l�C&�fxL\���2X�߸�[���,����F�R;N�sݐ)�#��w��-��5ƒ1�!)b��\����q�A$$�v�d&x;��������xw*6`3���[��
���X�Ѝ^J2S<$ip7���}Ef��|���}6��1sܫ���$䋙bFf�e<`é�zq�u�OC���L���%k�\IX��LJ�kQ��6ƜMEv��f�d׌I�)�������fd+�䢚6�4�qޜ��NÏ�$���]�3l��|nY�53�7�G���C׉�7T���Ԛ^ꃤ<��Ҥ��嫏�1Φ��+�O��|      D     x�}��r�8������#RG�m�I���i��Mo��T˔W����Jv�$�g<��3� �� ����­��������l���S��^S,c!U(�8II�,]�B���� @��L�B�>[�]W�<759Vbӫs܌�z腒�L�ė��n�ozg_]㨴��ʾ�a��j@u��B�/ACz�q+[�U�rE�x r������&}�+J@��M�--��]��=�²}��q� �MɉzfL�̾X��iG+�xq��᳦bP�lJM�)˂�����2�g-vG}�0;[
N��N�]aP7Um]��V�D٫Yn<DW{n�\5�f�ٸ�.k�ؽ��:�b}�3���-����S�%��k������mhV���y��JF5�y��S�;z�����%����:<��L=J��l<�[��^�����p����	Z��ƾ�5���zk�g�l����d���� �r
qA�䂐n���/�nG%,��u.oCMH���C8�jv9Bp�Z=�l�X�'���4�m!��Q\�U5j�sl�����!�r@�F't�[~|oL�2�x!�Y�Æ}�ಊ����]�6%}���P�B�^��FCI�Gl6�ft���vuE�� ro�C�}H4��#�)RӵA3��U�Ű�mC>���9|2�	�x|<���nM����~آih�+���8�?<���H8�8M٨&b�%�^�-}�T��)؜E���F�W=z�=R���6�C�Cy�Rl9��/3na�R=E�(3�ZC߫���x)���EG'�e0x��StB�.K��fS�O�
*�Dl���\᫢�M��`�c#R��(�{�׮i�8��Y��{�O�| Pq�(oh�Po_L�:[�m7�b��|�a<!�	�s��+G���.�Z�^�0}g�_���L�)}2��{�iA�-ʓ�GF$����a��b0rc���|�5�&�R�e�{�NC�j�1S�x���^.{-~��%$�ZL�L��ݙ���3ݰ)�_�3�OH!�4��Hl�G/���������s[�ż�׳p5�S?�B��z����:W<`0��1��A�G���S|�eZ�R���%�Ԓ�]�8��c���'"?���c|N�߷�Qn���b�9�Ӵ�n�O�$��P$Ir�_��wwSv�ah1]��rk�5�z�Bl��u2�gؘ��R6�.�"P#���g8H9����"�gL�&���M����ky��ׅk��ky�y=O�`LWO�GN]B?
�q��K,��Wb�j�,39����?������ĺ      B   %  x����n�0D��W����U�z���^\�"`���n���DMO͛���q�쌊+���N�N�%����-�(� ��ie��y�R�ν��ONNf�q�=�\��fptڛ�Fcnb��z7J�?.�#%GO����Xi1����ͽ��I�avJ{<�8�a�/�t�f�x��q��1�DNu8��t�����(A�P���	=�Iw�R+
j!�'E�S�^:�ZH$�ɶ̺���j��Z������< w�r�J�C}1���T�4��䐰�)�Le�����EQ��7��      >     x�5��N1E�g�b>��mY��#��� Ƃ�˰[i�fj����B|�I&�̽��s��(�v;ξ9��kr*���vt0�6?��Fgbr%>p4����;���O�jb�č�5u��vt�A^`m)Pk�w�J�6cg��z�x=_�*�(QS�pv2����\����s���H)ԳL�*��B�ǀ:����$L��)�C�%�[�cm8s�kkp�����g�1�B� ���s���4C��3q�I�FX�cU���Gv��9�R:�ۻl;ʲ���n$      ;   ?   x�3�t--�/H�2�t�M-�LN,�2�t,�L�2���LI�IUpM,.QH�KQpL)������ �~�     