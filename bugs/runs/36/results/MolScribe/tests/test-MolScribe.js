const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractc61KO5H = await MolScribe.new({from: accounts[5]});
		const transactionValuejtP11A = BigInt("1400")
		const buyert8sFD00 = accounts[0]
		const tokenIdUSabMwl = BigInt("1203")
		const tokenAddresszOjnizC = accounts[0]
		const _molFeekOfLIyO = BigInt("914")
		const _molBanka01Qtv = accounts[5]
		await contractc61KO5H.makeOffer.call(tokenAddresszOjnizC, tokenIdUSabMwl, buyert8sFD00, transactionValuejtP11A, {from: accounts[1]});
		await contractc61KO5H.updateMolFees.call(_molFeekOfLIyO, {from: accounts[4]});
		await contractc61KO5H.updateMolBank.call(_molBanka01Qtv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractc61KO5H.makeOffer.call(tokenAddresszOjnizC, tokenIdUSabMwl, buyert8sFD00, transactionValuejtP11A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFRdY3q = await MolScribe.new({from: accounts[4]});
		const tokenIdkH3GdCM = BigInt("744")
		const tokenAddressP98qClb = accounts[5]
		const communityAddressz4IKR8l = accounts[1]
		const tokenIdSZcv8GI = BigInt("1084")
		const tokenAddressOINlJZR = accounts[4]
		await contractFRdY3q.acceptOffer.call(tokenAddressP98qClb, tokenIdkH3GdCM, {from: accounts[3]});
		await contractFRdY3q.giftLexART.call(tokenAddressOINlJZR, tokenIdSZcv8GI, communityAddressz4IKR8l, {from: accounts[5]});

		await expect(contractFRdY3q.acceptOffer.call(tokenAddressP98qClb, tokenIdkH3GdCM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractYpieY8n = await MolScribe.new({from: accounts[1]});
		const _molFeeVhhE3zf = BigInt("359")
		const transactionValueZeO9t0H = BigInt("642")
		const buyersOzIyMc = accounts[2]
		const tokenIdh9cg0gh = BigInt("1681")
		const tokenAddressboD4ltz = accounts[5]
		const _molBank4qFpH3 = accounts[3]
		await contractYpieY8n.updateMolFees.call(_molFeeVhhE3zf, {from: accounts[0]});
		await contractYpieY8n.makeOffer.call(tokenAddressboD4ltz, tokenIdh9cg0gh, buyersOzIyMc, transactionValueZeO9t0H, {from: accounts[5]});
		await contractYpieY8n.updateMolBank.call(_molBank4qFpH3, {from: accounts[5]});

		await expect(contractYpieY8n.updateMolFees.call(_molFeeVhhE3zf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractJbsC8fI = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesmf5FZb2 = BigInt("116")
		const communityAddressLlyziQG = accounts[0]
		const tokenIdZBQlpKF = BigInt("398")
		const tokenAddressfbZsT9v = accounts[2]
		const tokenIdgVFpq2f = BigInt("1226")
		const tokenAddressZuqzbps = accounts[0]
		await contractJbsC8fI.scribeNFT.call(tokenAddressfbZsT9v, tokenIdZBQlpKF, communityAddressLlyziQG, startingRoyaltiesmf5FZb2, {from: accounts[0]});
		const nullZvWrcI = await contractJbsC8fI.getTokenKey.call(tokenAddressZuqzbps, tokenIdgVFpq2f, {from: accounts[5]});

		await expect(contractJbsC8fI.scribeNFT.call(tokenAddressfbZsT9v, tokenIdZBQlpKF, communityAddressLlyziQG, startingRoyaltiesmf5FZb2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractfSsawZp = await MolScribe.new({from: accounts[4]});
		const tokenIdF0jrClw = BigInt("744")
		const tokenAddressKk5B2Il = accounts[6]
		const communityAddressTMBypI = accounts[1]
		const tokenIdBLzylwC = BigInt("1084")
		const tokenAddressEKzEco7 = accounts[4]
		await contractfSsawZp.acceptOffer.call(tokenAddressKk5B2Il, tokenIdF0jrClw, {from: accounts[3]});
		await contractfSsawZp.giftLexART.call(tokenAddressEKzEco7, tokenIdBLzylwC, communityAddressTMBypI, {from: accounts[5]});

		await expect(contractfSsawZp.acceptOffer.call(tokenAddressKk5B2Il, tokenIdF0jrClw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractDcwyojz = await MolScribe.new({from: accounts[4]});
		const communityAddressWZuSYKF = accounts[1]
		const tokenIdArRRFA = BigInt("1084")
		const tokenAddressjxki9OR = accounts[4]
		await contractDcwyojz.giftLexART.call(tokenAddressjxki9OR, tokenIdArRRFA, communityAddressWZuSYKF, {from: accounts[5]});

		await expect(contractDcwyojz.giftLexART.call(tokenAddressjxki9OR, tokenIdArRRFA, communityAddressWZuSYKF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractsVib3cC = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdeF3HEhf = BigInt("568")
		const tokenAddressxDiCpBj = accounts[1]
		const tokenIdHq6oQf = BigInt("53")
		const tokenAddresse0uq0cH = accounts[5]
		const transactionValueZKstT0 = BigInt("1543")
		const buyerEVGlDFO = accounts[2]
		const tokenIdNYOGVJW = BigInt("1516")
		const tokenAddressCTf30xo = accounts[4]
		const tokenIdymo2sQK = BigInt("1762")
		const tokenAddresscjT2i6g = "0x0000000000000000000000000000000000000001"
		const nullKhoWygt = await contractsVib3cC.getTokenKey.call(tokenAddressxDiCpBj, tokenIdeF3HEhf, {from: accounts[3]});
		const nullQiT4LK = await contractsVib3cC.getTokenKey.call(tokenAddresse0uq0cH, tokenIdHq6oQf, {from: accounts[1]});
		await contractsVib3cC.makeOffer.call(tokenAddressCTf30xo, tokenIdNYOGVJW, buyerEVGlDFO, transactionValueZKstT0, {from: accounts[5]});
		const nullL8RWdC = await contractsVib3cC.getTokenKey.call(tokenAddresscjT2i6g, tokenIdymo2sQK, {from: accounts[5]});
	});
})