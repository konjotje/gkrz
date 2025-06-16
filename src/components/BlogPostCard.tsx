import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogPostCard = ({ post, variant = 'default' }) => {
  // Zorg dat de juiste foto bij de juiste naam staat
  let authorPhoto = post.authorPhoto;
  if (post.author === 'Linde') {
    authorPhoto = '/casinologos/casilogos/profielfotos/Linde Casino Expert Gokkerz.nl.webp';
  } else if (post.author === 'Ruben') {
    authorPhoto = '/casinologos/casilogos/profielfotos/Ruben Casino Expert Gokkerz.nl.webp';
  } else if (post.author === 'Jack') {
    authorPhoto = '/casinologos/casilogos/profielfotos/Jack Casino Expert Gokkerz.nl.webp';
  }

  if (variant === 'square') {
    return (
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl aspect-square flex flex-col">
          <div className="relative flex-1">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-gokkerz-green/90 text-xs font-semibold px-2 py-1 rounded text-white">
                {post.category}
              </span>
            </div>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-gray-900 font-semibold text-sm line-clamp-2 group-hover:text-gokkerz-green transition-colors">
              {post.title}
            </h3>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
          <div className="relative h-80">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-gokkerz-green px-3 py-1 text-sm font-semibold rounded-full text-white">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold group-hover:text-gokkerz-green transition-colors mb-3 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src={authorPhoto}
                  alt={post.author}
                  className="h-8 w-8 rounded-full object-cover border border-gray-200"
                />
                <span className="font-medium text-gray-900">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl max-h-[410px] flex flex-col">
        <div className="relative h-40 min-h-[160px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <span className="bg-gokkerz-green/90 text-xs font-semibold px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold group-hover:text-gokkerz-green transition-colors line-clamp-1">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
            <span className="flex items-center gap-2">
              <img
                src={authorPhoto}
                alt={post.author}
                className="h-7 w-7 rounded-full object-cover object-top border border-gray-200 bg-white"
                style={{ minWidth: 28, minHeight: 28 }}
              />
              <span className="font-medium text-gray-900">{post.author}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const BonusCard = ({ offer }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-4 flex items-center gap-4">
        <img
          src={offer.casinoLogo}
          alt={offer.casinoName}
          className="h-12 w-12 rounded-full border border-gray-200 object-contain"
        />
        <div>
          <h4 className="text-base font-semibold group-hover:text-gokkerz-green transition-colors">
            {offer.casinoName}
          </h4>
          <p className="text-sm text-gray-600">{offer.bonusAmount} + {offer.freeSpins} Free Spins</p>
        </div>
      </div>
      <div className="p-4 border-t text-sm text-gray-500">
        <p className="line-clamp-2">{offer.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {offer.validUntil}
          </span>
        </div>
      </div>
    </div>
  );
};
