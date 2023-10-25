const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractTM1AWoM = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesK1RBbeH = BigInt("199")
		const communityAddressw9nYnJc = accounts[3]
		const tokenIdnvWdblV = BigInt("172")
		const tokenAddressQNMC10B = accounts[4]
		const tokenIdPxrHubB = BigInt("954")
		const tokenAddressTHV4bkb = accounts[0]
		const tokenIde1Svwdc = BigInt("1009")
		const tokenAddressv32UXB2 = accounts[5]
		const _molFeeyNzGneU = BigInt("50")
		const _molcq1QN2v = accounts[2]
		await contractTM1AWoM.scribeNFT.call(tokenAddressQNMC10B, tokenIdnvWdblV, communityAddressw9nYnJc, startingRoyaltiesK1RBbeH, {from: accounts[1]});
		const nullYulALOW = await contractTM1AWoM.getTokenKey.call(tokenAddressTHV4bkb, tokenIdPxrHubB, {from: accounts[4]});
		const nulliYYKL52 = await contractTM1AWoM.getTokenKey.call(tokenAddressv32UXB2, tokenIde1Svwdc, {from: accounts[3]});
		await contractTM1AWoM.updateMolFees.call(_molFeeyNzGneU, {from: accounts[3]});
		await contractTM1AWoM.updateMol.call(_molcq1QN2v, {from: accounts[3]});

		await expect(contractTM1AWoM.scribeNFT.call(tokenAddressQNMC10B, tokenIdnvWdblV, communityAddressw9nYnJc, startingRoyaltiesK1RBbeH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYLpieSb = await MolScribe.new({from: accounts[0]});
		const tokenIdm13EAA = BigInt("159")
		const tokenAddressSsGHpWW = "0x0000000000000000000000000000000000000001"
		const communityAddressGEer98 = "0x0000000000000000000000000000000000000001"
		const tokenIdStyEIkD = BigInt("1765")
		const tokenAddressgwWmOm8 = accounts[3]
		const startingRoyaltiesDL76QbQ = BigInt("104")
		const communityAddressaFedNnX = accounts[1]
		const tokenIdZWFWpi6 = BigInt("140")
		const tokenAddressnm1HQEb = accounts[2]
		const _molearln8Q = accounts[5]
		const _molFeeEk7WciD = BigInt("838")
		const nullrT2hC5D = await contractYLpieSb.getTokenKey.call(tokenAddressSsGHpWW, tokenIdm13EAA, {from: accounts[3]});
		await contractYLpieSb.giftLexART.call(tokenAddressgwWmOm8, tokenIdStyEIkD, communityAddressGEer98, {from: accounts[4]});
		await contractYLpieSb.scribeNFT.call(tokenAddressnm1HQEb, tokenIdZWFWpi6, communityAddressaFedNnX, startingRoyaltiesDL76QbQ, {from: accounts[2]});
		await contractYLpieSb.updateMol.call(_molearln8Q, {from: accounts[3]});
		await contractYLpieSb.updateMolFees.call(_molFeeEk7WciD, {from: accounts[4]});

		assert.equal(nullrT2hC5D, 0x0000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000009f)
		await expect(contractYLpieSb.giftLexART.call(tokenAddressgwWmOm8, tokenIdStyEIkD, communityAddressGEer98, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractlEWWUsC = await MolScribe.new({from: accounts[3]});
		const transactionValue5FWIoW = BigInt("564")
		const buyerbJiLUk = accounts[1]
		const tokenIdZazCjrX = BigInt("695")
		const tokenAddressVBkKDm = accounts[1]
		const tokenIdMPF86M7 = BigInt("579")
		const tokenAddressedF6aZj = "0x0000000000000000000000000000000000000001"
		const _molBankPS1Qui0 = accounts[4]
		const transactionValueoat1W0c = BigInt("641")
		const buyerz3hgYQC = accounts[1]
		const tokenIdbOS7sC = BigInt("401")
		const tokenAddressgu9Jjua = accounts[0]
		const _molBankROsaUkR = accounts[2]
		await contractlEWWUsC.makeOffer.call(tokenAddressVBkKDm, tokenIdZazCjrX, buyerbJiLUk, transactionValue5FWIoW, {from: accounts[0]});
		const nulldQ2Pa0E = await contractlEWWUsC.getTokenKey.call(tokenAddressedF6aZj, tokenIdMPF86M7, {from: accounts[3]});
		await contractlEWWUsC.updateMolBank.call(_molBankPS1Qui0, {from: accounts[2]});
		await contractlEWWUsC.makeOffer.call(tokenAddressgu9Jjua, tokenIdbOS7sC, buyerz3hgYQC, transactionValueoat1W0c, {from: "0x0000000000000000000000000000000000000001"});
		await contractlEWWUsC.updateMolBank.call(_molBankROsaUkR, {from: accounts[4]});

		await expect(contractlEWWUsC.makeOffer.call(tokenAddressVBkKDm, tokenIdZazCjrX, buyerbJiLUk, transactionValue5FWIoW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractkyvcmkZ = await MolScribe.new({from: accounts[2]});
		const tokenIdXRFFXU = BigInt("2029")
		const tokenAddressbIVMXGZ = accounts[4]
		const tokenIdZiSixSz = BigInt("1823")
		const tokenAddressh83TEoH = accounts[2]
		const tokenIdF41PSjF = BigInt("832")
		const tokenAddress0WMSzv = accounts[1]
		const communityAddressCawckof = accounts[0]
		const tokenIdnYW0idp = BigInt("283")
		const tokenAddressfIqkqQF = accounts[0]
		const tokenIdOxSBUGP = BigInt("414")
		const tokenAddressXXTodu7 = accounts[3]
		await contractkyvcmkZ.acceptOffer.call(tokenAddressbIVMXGZ, tokenIdXRFFXU, {from: "0x0000000000000000000000000000000000000001"});
		await contractkyvcmkZ.acceptOffer.call(tokenAddressh83TEoH, tokenIdZiSixSz, {from: accounts[4]});
		await contractkyvcmkZ.acceptOffer.call(tokenAddress0WMSzv, tokenIdF41PSjF, {from: accounts[3]});
		await contractkyvcmkZ.giftLexART.call(tokenAddressfIqkqQF, tokenIdnYW0idp, communityAddressCawckof, {from: accounts[0]});
		const nullTXnIdpe = await contractkyvcmkZ.getTokenKey.call(tokenAddressXXTodu7, tokenIdOxSBUGP, {from: accounts[0]});

		await expect(contractkyvcmkZ.acceptOffer.call(tokenAddressbIVMXGZ, tokenIdXRFFXU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractcTMLMZc = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const _molHwZ9LKU = accounts[1]
		const _molFeeV5IB2ar = BigInt("371")
		const _molFeeU47fPHB = BigInt("1294")
		const transactionValueiYnBDyM = BigInt("929")
		const buyerWW4zS1V = accounts[4]
		const tokenIdr5dlSJ6 = BigInt("2025")
		const tokenAddressar3TtfF = accounts[2]
		const startingRoyaltiesUBFtTfj = BigInt("49")
		const communityAddressN4PKdT = accounts[2]
		const tokenIdOMBArPa = BigInt("1835")
		const tokenAddressYAm3pm = accounts[4]
		await contractcTMLMZc.updateMol.call(_molHwZ9LKU, {from: accounts[3]});
		await contractcTMLMZc.updateMolFees.call(_molFeeV5IB2ar, {from: accounts[0]});
		await contractcTMLMZc.updateMolFees.call(_molFeeU47fPHB, {from: accounts[3]});
		await contractcTMLMZc.makeOffer.call(tokenAddressar3TtfF, tokenIdr5dlSJ6, buyerWW4zS1V, transactionValueiYnBDyM, {from: accounts[3]});
		await contractcTMLMZc.scribeNFT.call(tokenAddressYAm3pm, tokenIdOMBArPa, communityAddressN4PKdT, startingRoyaltiesUBFtTfj, {from: accounts[2]});
	});

	it('test for MolScribe', async () => {
		const contractJ7nj5D = await MolScribe.new({from: accounts[0]});
		const _molBankhiPnLK3 = accounts[2]
		const transactionValueo5yHN1z = BigInt("1191")
		const buyersV84tLG = accounts[3]
		const tokenIdzYWXfkf = BigInt("1265")
		const tokenAddressIqEVbK = accounts[4]
		const tokenIdJlgAuaX = BigInt("808")
		const tokenAddressl9eP3aA = accounts[3]
		const tokenIdQqr7qPY = BigInt("197")
		const tokenAddressXVYQXWf = accounts[3]
		const _molBankurTwHmM = accounts[2]
		await contractJ7nj5D.updateMolBank.call(_molBankhiPnLK3, {from: accounts[4]});
		await contractJ7nj5D.makeOffer.call(tokenAddressIqEVbK, tokenIdzYWXfkf, buyersV84tLG, transactionValueo5yHN1z, {from: accounts[2]});
		await contractJ7nj5D.acceptOffer.call(tokenAddressl9eP3aA, tokenIdJlgAuaX, {from: accounts[2]});
		const nullXSvxAc = await contractJ7nj5D.getTokenKey.call(tokenAddressXVYQXWf, tokenIdQqr7qPY, {from: accounts[1]});
		await contractJ7nj5D.updateMolBank.call(_molBankurTwHmM, {from: accounts[1]});

		await expect(contractJ7nj5D.updateMolBank.call(_molBankhiPnLK3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractMarrmJ3 = await MolScribe.new({from: accounts[3]});
		const tokenIdLbyRO4Q = BigInt("181")
		const tokenAddressbYvtFaK = accounts[2]
		const tokenIdOr3OBPP = BigInt("742")
		const tokenAddressOdI1pp = accounts[3]
		const _molFeemLtgfZv = BigInt("1108")
		const nulle6x94nW = await contractMarrmJ3.getTokenKey.call(tokenAddressbYvtFaK, tokenIdLbyRO4Q, {from: accounts[5]});
		const nullhDUW3E1 = await contractMarrmJ3.getTokenKey.call(tokenAddressOdI1pp, tokenIdOr3OBPP, {from: accounts[4]});
		await contractMarrmJ3.updateMolFees.call(_molFeemLtgfZv, {from: accounts[2]});

		await expect(contractMarrmJ3.getTokenKey.call(tokenAddressbYvtFaK, tokenIdLbyRO4Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})