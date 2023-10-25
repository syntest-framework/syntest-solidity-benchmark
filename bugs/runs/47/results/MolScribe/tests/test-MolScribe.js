const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractY7wjYGa = await MolScribe.new({from: accounts[1]});
		const communityAddressRHH6d3X = accounts[4]
		const tokenIdKpPUlkj = BigInt("1746")
		const tokenAddressx7JYRrF = accounts[0]
		const _molFeekO5C1OI = BigInt("963")
		const startingRoyaltiesViXFgLd = BigInt("54")
		const communityAddressgGRxe8i = accounts[1]
		const tokenIdEXAEwDp = BigInt("42")
		const tokenAddressSUf79YO = accounts[1]
		const _molBankf1B7HMz = "0x0000000000000000000000000000000000000001"
		await contractY7wjYGa.giftLexART.call(tokenAddressx7JYRrF, tokenIdKpPUlkj, communityAddressRHH6d3X, {from: accounts[3]});
		await contractY7wjYGa.updateMolFees.call(_molFeekO5C1OI, {from: accounts[1]});
		await contractY7wjYGa.scribeNFT.call(tokenAddressSUf79YO, tokenIdEXAEwDp, communityAddressgGRxe8i, startingRoyaltiesViXFgLd, {from: accounts[1]});
		await contractY7wjYGa.updateMolBank.call(_molBankf1B7HMz, {from: accounts[2]});

		await expect(contractY7wjYGa.giftLexART.call(tokenAddressx7JYRrF, tokenIdKpPUlkj, communityAddressRHH6d3X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractyCAdvyC = await MolScribe.new({from: accounts[5]});
		const tokenIddVz96D = BigInt("1349")
		const tokenAddressRHJX3kV = accounts[4]
		const startingRoyaltiesTed6PBd = BigInt("60")
		const communityAddresstE5zKCI = accounts[5]
		const tokenIdEiNMkv5 = BigInt("1385")
		const tokenAddressfZN8AIx = accounts[0]
		const _molfnwrDi = accounts[1]
		const nullswH7zQ = await contractyCAdvyC.getTokenKey.call(tokenAddressRHJX3kV, tokenIddVz96D, {from: accounts[4]});
		await contractyCAdvyC.scribeNFT.call(tokenAddressfZN8AIx, tokenIdEiNMkv5, communityAddresstE5zKCI, startingRoyaltiesTed6PBd, {from: accounts[3]});
		await contractyCAdvyC.updateMol.call(_molfnwrDi, {from: accounts[0]});

		assert.equal(nullswH7zQ, 0x9f1deb9e1e8c2add5f9bb706faeddec9d60695f40000000000000000000000000000000000000000000000000000000000000545)
		await expect(contractyCAdvyC.scribeNFT.call(tokenAddressfZN8AIx, tokenIdEiNMkv5, communityAddresstE5zKCI, startingRoyaltiesTed6PBd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractpcE9xpG = await MolScribe.new({from: accounts[1]});
		const _molI8NsQsq = accounts[2]
		const startingRoyaltiesZvw06Br = BigInt("80")
		const communityAddressfDj49b = accounts[3]
		const tokenIdUipueSq = BigInt("1861")
		const tokenAddressMcf1tQm = accounts[1]
		const transactionValuedBU8nv = BigInt("542")
		const buyerIktqV3p = accounts[4]
		const tokenIdR88RpCq = BigInt("799")
		const tokenAddresssKRoUJS = accounts[3]
		await contractpcE9xpG.updateMol.call(_molI8NsQsq, {from: accounts[0]});
		await contractpcE9xpG.scribeNFT.call(tokenAddressMcf1tQm, tokenIdUipueSq, communityAddressfDj49b, startingRoyaltiesZvw06Br, {from: accounts[4]});
		await contractpcE9xpG.makeOffer.call(tokenAddresssKRoUJS, tokenIdR88RpCq, buyerIktqV3p, transactionValuedBU8nv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractpcE9xpG.updateMol.call(_molI8NsQsq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractcmoTmj1 = await MolScribe.new({from: accounts[0]});
		const tokenIdTWQESjv = BigInt("1601")
		const tokenAddressRT4kaA = accounts[1]
		const transactionValue2IDZtZ = BigInt("1413")
		const buyerdaa7j8C = accounts[3]
		const tokenIdXv9MQ4x = BigInt("1607")
		const tokenAddressWHmBQJv = accounts[1]
		const startingRoyaltiesoaYJtbU = BigInt("24")
		const communityAddresszLwbkG7 = accounts[0]
		const tokenIdo9Ay6v = BigInt("815")
		const tokenAddresswSmoYI = accounts[0]
		await contractcmoTmj1.acceptOffer.call(tokenAddressRT4kaA, tokenIdTWQESjv, {from: accounts[1]});
		await contractcmoTmj1.makeOffer.call(tokenAddressWHmBQJv, tokenIdXv9MQ4x, buyerdaa7j8C, transactionValue2IDZtZ, {from: accounts[0]});
		await contractcmoTmj1.scribeNFT.call(tokenAddresswSmoYI, tokenIdo9Ay6v, communityAddresszLwbkG7, startingRoyaltiesoaYJtbU, {from: accounts[1]});

		await expect(contractcmoTmj1.acceptOffer.call(tokenAddressRT4kaA, tokenIdTWQESjv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractQktOA1c = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const startingRoyaltiestR0GfDk = BigInt("179")
		const communityAddressc9bZMDV = accounts[2]
		const tokenIdjGKsoTF = BigInt("768")
		const tokenAddressaj0iEK5 = accounts[2]
		const transactionValueNsiRpVP = BigInt("1051")
		const buyer39c70A = accounts[3]
		const tokenIdu4oBDAm = BigInt("154")
		const tokenAddressjZgCzdu = accounts[2]
		const _molFeeDPJpaIo = BigInt("1083")
		const tokenIdrK4crYA = BigInt("1349")
		const tokenAddress1cHozj = accounts[1]
		const communityAddressoBf8KWF = accounts[3]
		const tokenIdbMP5oT = BigInt("1151")
		const tokenAddressmKHxZRE = accounts[3]
		await contractQktOA1c.scribeNFT.call(tokenAddressaj0iEK5, tokenIdjGKsoTF, communityAddressc9bZMDV, startingRoyaltiestR0GfDk, {from: accounts[1]});
		await contractQktOA1c.makeOffer.call(tokenAddressjZgCzdu, tokenIdu4oBDAm, buyer39c70A, transactionValueNsiRpVP, {from: "0x0000000000000000000000000000000000000001"});
		await contractQktOA1c.updateMolFees.call(_molFeeDPJpaIo, {from: accounts[3]});
		const nullOy4mAVN = await contractQktOA1c.getTokenKey.call(tokenAddress1cHozj, tokenIdrK4crYA, {from: accounts[2]});
		await contractQktOA1c.giftLexART.call(tokenAddressmKHxZRE, tokenIdbMP5oT, communityAddressoBf8KWF, {from: accounts[5]});
	});

	it('test for MolScribe', async () => {
		const contractTDlsghi = await MolScribe.new({from: accounts[0]});
		const transactionValuekiHUhb8 = BigInt("1413")
		const buyerkbSX171 = accounts[3]
		const tokenIdNqIF5pr = BigInt("1607")
		const tokenAddressKAyFhxg = accounts[1]
		const startingRoyaltieskonKjs6 = BigInt("24")
		const communityAddressB5EitMX = accounts[0]
		const tokenIdNY0Mmgc = BigInt("815")
		const tokenAddressoxi02hv = accounts[0]
		await contractTDlsghi.makeOffer.call(tokenAddressKAyFhxg, tokenIdNqIF5pr, buyerkbSX171, transactionValuekiHUhb8, {from: accounts[0]});
		await contractTDlsghi.scribeNFT.call(tokenAddressoxi02hv, tokenIdNY0Mmgc, communityAddressB5EitMX, startingRoyaltieskonKjs6, {from: accounts[1]});

		await expect(contractTDlsghi.makeOffer.call(tokenAddressKAyFhxg, tokenIdNqIF5pr, buyerkbSX171, transactionValuekiHUhb8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})