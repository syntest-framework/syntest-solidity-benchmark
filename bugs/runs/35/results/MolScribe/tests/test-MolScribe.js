const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractWVcpJsg = await MolScribe.new({from: accounts[2]});
		const tokenIdgGdSV9 = BigInt("1753")
		const tokenAddressw7b3vpi = accounts[3]
		const _molBankp1Uao4 = accounts[3]
		const _molBankYb0YVoM = accounts[1]
		const startingRoyaltiesVl6rQRV = BigInt("36")
		const communityAddresswHma9jn = accounts[2]
		const tokenIdq7x8pWN = BigInt("411")
		const tokenAddressxcH7ljL = accounts[3]
		const nullFq8hUAN = await contractWVcpJsg.getTokenKey.call(tokenAddressw7b3vpi, tokenIdgGdSV9, {from: accounts[4]});
		await contractWVcpJsg.updateMolBank.call(_molBankp1Uao4, {from: accounts[4]});
		await contractWVcpJsg.updateMolBank.call(_molBankYb0YVoM, {from: accounts[3]});
		await contractWVcpJsg.scribeNFT.call(tokenAddressxcH7ljL, tokenIdq7x8pWN, communityAddresswHma9jn, startingRoyaltiesVl6rQRV, {from: accounts[5]});

		assert.equal(nullFq8hUAN, 0x5038c8c8eea0c5ffb8600c2f0580fc32000ee31200000000000000000000000000000000000000000000000000000000000006d9)
		await expect(contractWVcpJsg.updateMolBank.call(_molBankp1Uao4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGnaT09n = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdfs080Vs = BigInt("195")
		const tokenAddressfZfOCw = "0x0000000000000000000000000000000000000001"
		const transactionValueXkqcxhS = BigInt("488")
		const buyerw8JhoZQ = accounts[0]
		const tokenIdMiaSMUM = BigInt("1990")
		const tokenAddressuhlvjD = accounts[5]
		const tokenIdS26TMx = BigInt("1919")
		const tokenAddressAnJAzFS = accounts[3]
		await contractGnaT09n.acceptOffer.call(tokenAddressfZfOCw, tokenIdfs080Vs, {from: accounts[1]});
		await contractGnaT09n.makeOffer.call(tokenAddressuhlvjD, tokenIdMiaSMUM, buyerw8JhoZQ, transactionValueXkqcxhS, {from: "0x0000000000000000000000000000000000000001"});
		await contractGnaT09n.acceptOffer.call(tokenAddressAnJAzFS, tokenIdS26TMx, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractXGyx3Mn = await MolScribe.new({from: accounts[1]});
		const transactionValuezwLaFqm = BigInt("1968")
		const buyerIxGAlt0 = accounts[0]
		const tokenIduIApr9Q = BigInt("1028")
		const tokenAddressugElRa8 = accounts[4]
		const startingRoyaltiesx7lsk5 = BigInt("218")
		const communityAddressEbEmvd = accounts[5]
		const tokenIdFaPDH3G = BigInt("715")
		const tokenAddressGA3B5IP = accounts[1]
		const tokenIdLHsZouf = BigInt("476")
		const tokenAddressBT71men = accounts[4]
		const transactionValueYANXB5 = BigInt("323")
		const buyerpU8agud = accounts[3]
		const tokenIdjfbGJ1b = BigInt("224")
		const tokenAddressTdtKoap = accounts[3]
		await contractXGyx3Mn.makeOffer.call(tokenAddressugElRa8, tokenIduIApr9Q, buyerIxGAlt0, transactionValuezwLaFqm, {from: accounts[4]});
		await contractXGyx3Mn.scribeNFT.call(tokenAddressGA3B5IP, tokenIdFaPDH3G, communityAddressEbEmvd, startingRoyaltiesx7lsk5, {from: accounts[4]});
		await contractXGyx3Mn.acceptOffer.call(tokenAddressBT71men, tokenIdLHsZouf, {from: accounts[0]});
		await contractXGyx3Mn.makeOffer.call(tokenAddressTdtKoap, tokenIdjfbGJ1b, buyerpU8agud, transactionValueYANXB5, {from: accounts[3]});

		await expect(contractXGyx3Mn.makeOffer.call(tokenAddressugElRa8, tokenIduIApr9Q, buyerIxGAlt0, transactionValuezwLaFqm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFDuedvP = await MolScribe.new({from: accounts[3]});
		const tokenIdVF2Qrgp = BigInt("1679")
		const tokenAddressqHfdVAD = accounts[5]
		const tokenIdyV6tWN0 = BigInt("1696")
		const tokenAddresswTs5iEu = accounts[1]
		const tokenIdFjYZAKI = BigInt("957")
		const tokenAddressFKTPRFn = "0x0000000000000000000000000000000000000001"
		const nullrnv35ar = await contractFDuedvP.getTokenKey.call(tokenAddressqHfdVAD, tokenIdVF2Qrgp, {from: accounts[3]});
		await contractFDuedvP.acceptOffer.call(tokenAddresswTs5iEu, tokenIdyV6tWN0, {from: accounts[4]});
		const nullZDyEVD = await contractFDuedvP.getTokenKey.call(tokenAddressFKTPRFn, tokenIdFjYZAKI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullrnv35ar, 0xf2035cbda56d301968067112fdadd645d9e8cf14000000000000000000000000000000000000000000000000000000000000068f)
		await expect(contractFDuedvP.acceptOffer.call(tokenAddresswTs5iEu, tokenIdyV6tWN0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractFYNcfPx = await MolScribe.new({from: accounts[2]});
		const startingRoyaltiesBbhmKL4 = BigInt("77")
		const communityAddressC6lMjRJ = accounts[5]
		const tokenIdjGxWMlP = BigInt("772")
		const tokenAddressmEu4Od0 = accounts[5]
		const tokenIdtEviY6v = BigInt("282")
		const tokenAddressXNvswZ3 = accounts[3]
		const startingRoyaltiesKtunTUM = BigInt("2")
		const communityAddressyCK6TM0 = accounts[3]
		const tokenIdkJitBnl = BigInt("110")
		const tokenAddressh4wgwOy = accounts[5]
		const tokenIdQFjXkaC = BigInt("747")
		const tokenAddressHV4zRCC = accounts[0]
		const _molBankeCq8XF = accounts[1]
		await contractFYNcfPx.scribeNFT.call(tokenAddressmEu4Od0, tokenIdjGxWMlP, communityAddressC6lMjRJ, startingRoyaltiesBbhmKL4, {from: accounts[3]});
		const nulldPAH1AK = await contractFYNcfPx.getTokenKey.call(tokenAddressXNvswZ3, tokenIdtEviY6v, {from: accounts[5]});
		await contractFYNcfPx.scribeNFT.call(tokenAddressh4wgwOy, tokenIdkJitBnl, communityAddressyCK6TM0, startingRoyaltiesKtunTUM, {from: accounts[4]});
		const nullMRzKUDz = await contractFYNcfPx.getTokenKey.call(tokenAddressHV4zRCC, tokenIdQFjXkaC, {from: "0x0000000000000000000000000000000000000001"});
		await contractFYNcfPx.updateMolBank.call(_molBankeCq8XF, {from: accounts[4]});

		await expect(contractFYNcfPx.scribeNFT.call(tokenAddressmEu4Od0, tokenIdjGxWMlP, communityAddressC6lMjRJ, startingRoyaltiesBbhmKL4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractmSjTfyM = await MolScribe.new({from: accounts[3]});
		const communityAddressoutgCm = accounts[1]
		const tokenIdM3nRUU = BigInt("373")
		const tokenAddressxxacmx = accounts[4]
		const startingRoyaltiesI5IOTsO = BigInt("146")
		const communityAddressSaxFPb = "0x0000000000000000000000000000000000000001"
		const tokenIdBAX3Da1 = BigInt("1773")
		const tokenAddressORdGJg7 = "0x0000000000000000000000000000000000000001"
		const tokenIdJxyopTv = BigInt("1390")
		const tokenAddressOd1dwQ = accounts[3]
		const tokenIdhbtrrHl = BigInt("549")
		const tokenAddressjItMvH = accounts[0]
		await contractmSjTfyM.giftLexART.call(tokenAddressxxacmx, tokenIdM3nRUU, communityAddressoutgCm, {from: accounts[0]});
		await contractmSjTfyM.scribeNFT.call(tokenAddressORdGJg7, tokenIdBAX3Da1, communityAddressSaxFPb, startingRoyaltiesI5IOTsO, {from: accounts[5]});
		const nullop2mtYF = await contractmSjTfyM.getTokenKey.call(tokenAddressOd1dwQ, tokenIdJxyopTv, {from: accounts[3]});
		await contractmSjTfyM.acceptOffer.call(tokenAddressjItMvH, tokenIdhbtrrHl, {from: accounts[4]});

		await expect(contractmSjTfyM.giftLexART.call(tokenAddressxxacmx, tokenIdM3nRUU, communityAddressoutgCm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})