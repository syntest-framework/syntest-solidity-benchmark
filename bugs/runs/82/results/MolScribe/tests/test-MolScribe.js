const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractRmaAxlg = await MolScribe.new({from: accounts[3]});
		const transactionValueEFru3ki = BigInt("430")
		const buyer4Lh40v = accounts[3]
		const tokenIdEhkM4lw = BigInt("750")
		const tokenAddressnKzeOea = accounts[3]
		const transactionValuepOiYyDC = BigInt("1410")
		const buyerxgmy1LF = accounts[5]
		const tokenIdpO9cxz = BigInt("1269")
		const tokenAddressKMuUASU = accounts[4]
		const startingRoyaltiesGflwwoI = BigInt("130")
		const communityAddressX9SMnOI = accounts[1]
		const tokenIdonTZFkK = BigInt("1222")
		const tokenAddressZSedaFB = accounts[1]
		const tokenIdvhp5FCS = BigInt("120")
		const tokenAddressYKuUFpb = accounts[4]
		const tokenIdh80utCP = BigInt("67")
		const tokenAddressWFwnS8 = accounts[0]
		await contractRmaAxlg.makeOffer.call(tokenAddressnKzeOea, tokenIdEhkM4lw, buyer4Lh40v, transactionValueEFru3ki, {from: "0x0000000000000000000000000000000000000001"});
		await contractRmaAxlg.makeOffer.call(tokenAddressKMuUASU, tokenIdpO9cxz, buyerxgmy1LF, transactionValuepOiYyDC, {from: accounts[1]});
		await contractRmaAxlg.scribeNFT.call(tokenAddressZSedaFB, tokenIdonTZFkK, communityAddressX9SMnOI, startingRoyaltiesGflwwoI, {from: accounts[5]});
		await contractRmaAxlg.acceptOffer.call(tokenAddressYKuUFpb, tokenIdvhp5FCS, {from: accounts[5]});
		const nullnpzpUN6 = await contractRmaAxlg.getTokenKey.call(tokenAddressWFwnS8, tokenIdh80utCP, {from: accounts[2]});

		await expect(contractRmaAxlg.makeOffer.call(tokenAddressnKzeOea, tokenIdEhkM4lw, buyer4Lh40v, transactionValueEFru3ki, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract1d3Dsa = await MolScribe.new({from: accounts[2]});
		const tokenIdu7A6Ow = BigInt("72")
		const tokenAddressycCk4VO = accounts[5]
		const _molBank7M1Bu4 = accounts[3]
		const nullUONeEtU = await contract1d3Dsa.getTokenKey.call(tokenAddressycCk4VO, tokenIdu7A6Ow, {from: accounts[5]});
		await contract1d3Dsa.updateMolBank.call(_molBank7M1Bu4, {from: accounts[0]});

		assert.equal(nullUONeEtU, 0x31e96afa2fe5e9118659ce5c72e44dfb73a43ee20000000000000000000000000000000000000000000000000000000000000048)
		await expect(contract1d3Dsa.updateMolBank.call(_molBank7M1Bu4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractIliakW = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdT646fmF = BigInt("814")
		const tokenAddressioP3ksn = accounts[3]
		const _molvQhXryy = accounts[3]
		const transactionValuelHAcZ9p = BigInt("2015")
		const buyeryrz1Afl = accounts[2]
		const tokenIdpZzTULx = BigInt("494")
		const tokenAddresspayfJu8 = accounts[4]
		const startingRoyaltiesTDxdixE = BigInt("252")
		const communityAddressV0r02mn = accounts[2]
		const tokenIdfElDd1s = BigInt("278")
		const tokenAddressmQdIN0j = accounts[1]
		const tokenIdmvnjfSl = BigInt("1073")
		const tokenAddressPWDJ7g = accounts[0]
		await contractIliakW.acceptOffer.call(tokenAddressioP3ksn, tokenIdT646fmF, {from: accounts[3]});
		await contractIliakW.updateMol.call(_molvQhXryy, {from: accounts[2]});
		await contractIliakW.makeOffer.call(tokenAddresspayfJu8, tokenIdpZzTULx, buyeryrz1Afl, transactionValuelHAcZ9p, {from: accounts[5]});
		await contractIliakW.scribeNFT.call(tokenAddressmQdIN0j, tokenIdfElDd1s, communityAddressV0r02mn, startingRoyaltiesTDxdixE, {from: accounts[0]});
		const nullF65pVD = await contractIliakW.getTokenKey.call(tokenAddressPWDJ7g, tokenIdmvnjfSl, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contractDwo733B = await MolScribe.new({from: accounts[4]});
		const startingRoyaltiesWHxCXyS = BigInt("243")
		const communityAddressbpCjp3J = accounts[5]
		const tokenIdlmCjESD = BigInt("1895")
		const tokenAddressVZjRF38 = accounts[1]
		const tokenIdnqtbasu = BigInt("507")
		const tokenAddressEbypn92 = accounts[2]
		const tokenIds8IGcnM = BigInt("814")
		const tokenAddresslq5k5h6 = accounts[1]
		const tokenIdQWo6I1 = BigInt("86")
		const tokenAddressNmTj5L2 = accounts[3]
		await contractDwo733B.scribeNFT.call(tokenAddressVZjRF38, tokenIdlmCjESD, communityAddressbpCjp3J, startingRoyaltiesWHxCXyS, {from: accounts[3]});
		await contractDwo733B.acceptOffer.call(tokenAddressEbypn92, tokenIdnqtbasu, {from: accounts[1]});
		await contractDwo733B.acceptOffer.call(tokenAddresslq5k5h6, tokenIds8IGcnM, {from: accounts[0]});
		await contractDwo733B.acceptOffer.call(tokenAddressNmTj5L2, tokenIdQWo6I1, {from: accounts[2]});

		await expect(contractDwo733B.scribeNFT.call(tokenAddressVZjRF38, tokenIdlmCjESD, communityAddressbpCjp3J, startingRoyaltiesWHxCXyS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractCx3zmvt = await MolScribe.new({from: accounts[4]});
		const tokenIdSfgFlg3 = BigInt("507")
		const tokenAddresswl2G2BH = accounts[2]
		const tokenIdVUwjbk = BigInt("814")
		const tokenAddressHrgyKiw = accounts[1]
		const tokenIdrxSMCNY = BigInt("86")
		const tokenAddressreIA8Y9 = accounts[4]
		await contractCx3zmvt.acceptOffer.call(tokenAddresswl2G2BH, tokenIdSfgFlg3, {from: accounts[1]});
		await contractCx3zmvt.acceptOffer.call(tokenAddressHrgyKiw, tokenIdVUwjbk, {from: accounts[0]});
		await contractCx3zmvt.acceptOffer.call(tokenAddressreIA8Y9, tokenIdrxSMCNY, {from: accounts[2]});

		await expect(contractCx3zmvt.acceptOffer.call(tokenAddresswl2G2BH, tokenIdSfgFlg3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract0TJJuF = await MolScribe.new({from: accounts[4]});
		const communityAddresstPQx1Wh = "0x0000000000000000000000000000000000000001"
		const tokenIdR0jkJUA = BigInt("72")
		const tokenAddressXknY4Ck = accounts[5]
		const _molBanky92ZpDK = accounts[3]
		const communityAddresswdDTTPg = accounts[5]
		const tokenIdAU34HLV = BigInt("1421")
		const tokenAddressBQ44Ms9 = accounts[3]
		const communityAddressGWptsw5 = accounts[0]
		const tokenIdlDRQJUK = BigInt("39")
		const tokenAddresszv3UCBv = accounts[3]
		const _molFeey5VVISM = BigInt("765")
		const tokenIdjMb0WCJ = BigInt("1474")
		const tokenAddressMLlGj78 = accounts[0]
		await contract0TJJuF.giftLexART.call(tokenAddressXknY4Ck, tokenIdR0jkJUA, communityAddresstPQx1Wh, {from: accounts[2]});
		await contract0TJJuF.updateMolBank.call(_molBanky92ZpDK, {from: accounts[4]});
		await contract0TJJuF.giftLexART.call(tokenAddressBQ44Ms9, tokenIdAU34HLV, communityAddresswdDTTPg, {from: accounts[1]});
		await contract0TJJuF.giftLexART.call(tokenAddresszv3UCBv, tokenIdlDRQJUK, communityAddressGWptsw5, {from: accounts[1]});
		await contract0TJJuF.updateMolFees.call(_molFeey5VVISM, {from: accounts[0]});
		await contract0TJJuF.acceptOffer.call(tokenAddressMLlGj78, tokenIdjMb0WCJ, {from: accounts[1]});

		await expect(contract0TJJuF.giftLexART.call(tokenAddressXknY4Ck, tokenIdR0jkJUA, communityAddresstPQx1Wh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})