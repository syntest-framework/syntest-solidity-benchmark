const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractvTTnLvv = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdpd64tMq = BigInt("482")
		const tokenAddressCBjUye = accounts[2]
		const communityAddressZZGMgmg = accounts[4]
		const tokenIdrnMAj4l = BigInt("254")
		const tokenAddressnooCTGv = accounts[0]
		const startingRoyaltiesNGW4ic5 = BigInt("34")
		const communityAddressI312FuL = "0x0000000000000000000000000000000000000001"
		const tokenIdwikoOd9 = BigInt("528")
		const tokenAddressOpAWiu = accounts[1]
		await contractvTTnLvv.acceptOffer.call(tokenAddressCBjUye, tokenIdpd64tMq, {from: accounts[1]});
		await contractvTTnLvv.giftLexART.call(tokenAddressnooCTGv, tokenIdrnMAj4l, communityAddressZZGMgmg, {from: accounts[0]});
		await contractvTTnLvv.scribeNFT.call(tokenAddressOpAWiu, tokenIdwikoOd9, communityAddressI312FuL, startingRoyaltiesNGW4ic5, {from: accounts[0]});
	});

	it('test for MolScribe', async () => {
		const contractGLtGa6w = await MolScribe.new({from: accounts[3]});
		const tokenIdMOIxUAE = BigInt("1109")
		const tokenAddressKyjXqQh = accounts[2]
		const _molFeeZcYWo30 = BigInt("437")
		const tokenIdghgwZ0s = BigInt("1997")
		const tokenAddressc0GZeLJ = accounts[3]
		const tokenIdnYCWvuQ = BigInt("1989")
		const tokenAddressItz1uB = accounts[3]
		const nulloNDvCx = await contractGLtGa6w.getTokenKey.call(tokenAddressKyjXqQh, tokenIdMOIxUAE, {from: accounts[2]});
		await contractGLtGa6w.updateMolFees.call(_molFeeZcYWo30, {from: "0x0000000000000000000000000000000000000001"});
		await contractGLtGa6w.acceptOffer.call(tokenAddressc0GZeLJ, tokenIdghgwZ0s, {from: accounts[3]});
		const nulldrDIyv = await contractGLtGa6w.getTokenKey.call(tokenAddressItz1uB, tokenIdnYCWvuQ, {from: accounts[1]});

		assert.equal(nulloNDvCx, 0x83b971658295e5715799d24fb255d798c499b8670000000000000000000000000000000000000000000000000000000000000455)
		await expect(contractGLtGa6w.updateMolFees.call(_molFeeZcYWo30, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractAfplM3d = await MolScribe.new({from: accounts[4]});
		const tokenIdNNaVc3O = BigInt("373")
		const tokenAddressU7KPtCL = accounts[1]
		const _molBankcVwUeL9 = accounts[3]
		const _molFeeIIIiV1V = BigInt("1763")
		await contractAfplM3d.acceptOffer.call(tokenAddressU7KPtCL, tokenIdNNaVc3O, {from: accounts[5]});
		await contractAfplM3d.updateMolBank.call(_molBankcVwUeL9, {from: accounts[1]});
		await contractAfplM3d.updateMolFees.call(_molFeeIIIiV1V, {from: accounts[0]});

		await expect(contractAfplM3d.acceptOffer.call(tokenAddressU7KPtCL, tokenIdNNaVc3O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracthBrJVlL = await MolScribe.new({from: accounts[3]});
		const tokenIdJ9yHofc = BigInt("1447")
		const tokenAddressDpA4y7A = accounts[3]
		const startingRoyaltieswUFCvgL = BigInt("113")
		const communityAddressucAmt6G = accounts[5]
		const tokenIdSh8LHBm = BigInt("328")
		const tokenAddresscV6H9tc = accounts[4]
		const startingRoyaltiesfub7qow = BigInt("52")
		const communityAddressI3nyKBE = accounts[4]
		const tokenIdzviSf6X = BigInt("1387")
		const tokenAddressQLGiVTj = accounts[5]
		const tokenIdzECZJrk = BigInt("618")
		const tokenAddresslKI3NSa = accounts[1]
		const tokenIdR9RvVr = BigInt("543")
		const tokenAddress6CZuLs = accounts[4]
		const nullVXTszGY = await contracthBrJVlL.getTokenKey.call(tokenAddressDpA4y7A, tokenIdJ9yHofc, {from: accounts[1]});
		await contracthBrJVlL.scribeNFT.call(tokenAddresscV6H9tc, tokenIdSh8LHBm, communityAddressucAmt6G, startingRoyaltieswUFCvgL, {from: accounts[3]});
		await contracthBrJVlL.scribeNFT.call(tokenAddressQLGiVTj, tokenIdzviSf6X, communityAddressI3nyKBE, startingRoyaltiesfub7qow, {from: "0x0000000000000000000000000000000000000001"});
		const nullB6lZB7v = await contracthBrJVlL.getTokenKey.call(tokenAddresslKI3NSa, tokenIdzECZJrk, {from: accounts[3]});
		await contracthBrJVlL.acceptOffer.call(tokenAddress6CZuLs, tokenIdR9RvVr, {from: accounts[5]});

		assert.equal(nullVXTszGY, 0x932091f22f486be158f6ec723886415e61a2b48600000000000000000000000000000000000000000000000000000000000005a7)
		await expect(contracthBrJVlL.scribeNFT.call(tokenAddresscV6H9tc, tokenIdSh8LHBm, communityAddressucAmt6G, startingRoyaltieswUFCvgL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFrUvx5M = await MolScribe.new({from: accounts[1]});
		const communityAddressOqnGdZe = accounts[0]
		const tokenIdC1QDiBB = BigInt("326")
		const tokenAddresslumOPUS = accounts[4]
		const tokenIdSW3AbuA = BigInt("1780")
		const tokenAddressFgjHKJY = accounts[1]
		await contractFrUvx5M.giftLexART.call(tokenAddresslumOPUS, tokenIdC1QDiBB, communityAddressOqnGdZe, {from: accounts[5]});
		const nullSnTrdi = await contractFrUvx5M.getTokenKey.call(tokenAddressFgjHKJY, tokenIdSW3AbuA, {from: accounts[0]});

		await expect(contractFrUvx5M.giftLexART.call(tokenAddresslumOPUS, tokenIdC1QDiBB, communityAddressOqnGdZe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractIhOJNzX = await MolScribe.new({from: accounts[1]});
		const transactionValueUWCUFZK = BigInt("1075")
		const buyerhDK9Ff = accounts[0]
		const tokenIdgkCZX9O = BigInt("689")
		const tokenAddressTszfYYA = accounts[4]
		const tokenIdqFWL69J = BigInt("1253")
		const tokenAddressOTsLg9m = accounts[3]
		const communityAddressZFV0xUX = accounts[0]
		const tokenIdWErncIw = BigInt("514")
		const tokenAddressGmQLRS8 = accounts[4]
		await contractIhOJNzX.makeOffer.call(tokenAddressTszfYYA, tokenIdgkCZX9O, buyerhDK9Ff, transactionValueUWCUFZK, {from: accounts[0]});
		const null7BWtei = await contractIhOJNzX.getTokenKey.call(tokenAddressOTsLg9m, tokenIdqFWL69J, {from: accounts[0]});
		await contractIhOJNzX.giftLexART.call(tokenAddressGmQLRS8, tokenIdWErncIw, communityAddressZFV0xUX, {from: accounts[5]});

		await expect(contractIhOJNzX.makeOffer.call(tokenAddressTszfYYA, tokenIdgkCZX9O, buyerhDK9Ff, transactionValueUWCUFZK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})