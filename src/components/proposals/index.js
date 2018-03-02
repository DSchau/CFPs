import React from 'react';
import Link from 'gatsby-link';

import { Proposal } from '../proposal';

export function Proposals({ list }) {
  return list.map(proposal => <Link key={proposal.id} to={proposal.fields.slug} css={{ textDecoration: 'none', color: 'inherit' }}><Proposal {...proposal} /></Link>);
}
