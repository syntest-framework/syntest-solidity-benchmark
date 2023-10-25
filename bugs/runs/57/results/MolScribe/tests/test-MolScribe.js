const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractUYG0vh7 = await MolScribe.new({from: accounts[4]});
		const tokenIdLHzM3cu = BigInt("1534")
		const tokenAddressJAUD1Yc = accounts[3]
		const tokenId6so2Ml = BigInt("501")
		const tokenAddressW91sYni = accounts[3]
		const tokenIdsKFRTIA = BigInt("1389")
		const tokenAddressQE9jwPO = accounts[0]
		await contractUYG0vh7.acceptOffer.call(tokenAddressJAUD1Yc, tokenIdLHzM3cu, {from: accounts[2]});
		await contractUYG0vh7.acceptOffer.call(tokenAddressW91sYni, tokenId6so2Ml, {from: accounts[2]});
		const nulleHWCuml = await contractUYG0vh7.getTokenKey.call(tokenAddressQE9jwPO, tokenIdsKFRTIA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractUYG0vh7.acceptOffer.call(tokenAddressJAUD1Yc, tokenIdLHzM3cu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractkraTkMn = await MolScribe.new({from: accounts[4]});
		const tokenIdOKEvY0Q = BigInt("253")
		const tokenAddressds44Ju6 = accounts[2]
		const _molBankC66AhBL = accounts[2]
		const transactionValuexeEWrho = BigInt("1263")
		const buyer9Wgv78 = accounts[2]
		const tokenIdyoc1Tjx = BigInt("845")
		const tokenAddressvOSjyuj = accounts[3]
		const _molBank62Wqjs = accounts[1]
		const startingRoyaltiesLRQdXOc = BigInt("214")
		const communityAddressRiiAN0p = "0x0000000000000000000000000000000000000001"
		const tokenId6eRiTZ = BigInt("1100")
		const tokenAddressuM05xP = "0x0000000000000000000000000000000000000001"
		const nullKHS17yb = await contractkraTkMn.getTokenKey.call(tokenAddressds44Ju6, tokenIdOKEvY0Q, {from: accounts[1]});
		await contractkraTkMn.updateMolBank.call(_molBankC66AhBL, {from: accounts[0]});
		await contractkraTkMn.makeOffer.call(tokenAddressvOSjyuj, tokenIdyoc1Tjx, buyer9Wgv78, transactionValuexeEWrho, {from: accounts[1]});
		await contractkraTkMn.updateMolBank.call(_molBank62Wqjs, {from: "0x0000000000000000000000000000000000000001"});
		await contractkraTkMn.scribeNFT.call(tokenAddressuM05xP, tokenId6eRiTZ, communityAddressRiiAN0p, startingRoyaltiesLRQdXOc, {from: accounts[5]});

		assert.equal(nullKHS17yb, 0x88378f0d7d022d9a9dcd6b23fd8f71c8a6b0858400000000000000000000000000000000000000000000000000000000000000fd)
		await expect(contractkraTkMn.updateMolBank.call(_molBankC66AhBL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractSXIVI7d = await MolScribe.new({from: accounts[2]});
		const communityAddressEajpa2B = accounts[3]
		const tokenIdZxIadh8 = BigInt("1288")
		const tokenAddressqU2Wc3b = accounts[2]
		const tokenIdgVmsVkt = BigInt("803")
		const tokenAddresshwao6NX = accounts[4]
		const startingRoyaltiesrU2ll9 = BigInt("58")
		const communityAddresswtIo0U0 = accounts[5]
		const tokenIdK8zrFRa = BigInt("630")
		const tokenAddressOfMWUfN = accounts[5]
		const transactionValuembYbd5m = BigInt("1547")
		const buyerWJhZufY = accounts[4]
		const tokenIdZIfdzrV = BigInt("533")
		const tokenAddressJtZiIEv = accounts[0]
		const tokenIdOeitSqk = BigInt("731")
		const tokenAddressuJYjSXZ = accounts[2]
		await contractSXIVI7d.giftLexART.call(tokenAddressqU2Wc3b, tokenIdZxIadh8, communityAddressEajpa2B, {from: accounts[2]});
		const null89ugb6 = await contractSXIVI7d.getTokenKey.call(tokenAddresshwao6NX, tokenIdgVmsVkt, {from: "0x0000000000000000000000000000000000000001"});
		await contractSXIVI7d.scribeNFT.call(tokenAddressOfMWUfN, tokenIdK8zrFRa, communityAddresswtIo0U0, startingRoyaltiesrU2ll9, {from: accounts[1]});
		await contractSXIVI7d.makeOffer.call(tokenAddressJtZiIEv, tokenIdZIfdzrV, buyerWJhZufY, transactionValuembYbd5m, {from: accounts[2]});
		const nullH5junf2 = await contractSXIVI7d.getTokenKey.call(tokenAddressuJYjSXZ, tokenIdOeitSqk, {from: accounts[2]});

		await expect(contractSXIVI7d.giftLexART.call(tokenAddressqU2Wc3b, tokenIdZxIadh8, communityAddressEajpa2B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractGrpO4X = await MolScribe.new({from: accounts[0]});
		const startingRoyaltiesas8aJGX = BigInt("55")
		const communityAddressonbQc0R = accounts[2]
		const tokenIdUT6jo0X = BigInt("3")
		const tokenAddresse0DWPNn = accounts[4]
		const _molBanktnMVHBP = accounts[1]
		const communityAddressaVavjCy = accounts[2]
		const tokenIdXBTtpQx = BigInt("1587")
		const tokenAddressQjxANOq = accounts[4]
		await contractGrpO4X.scribeNFT.call(tokenAddresse0DWPNn, tokenIdUT6jo0X, communityAddressonbQc0R, startingRoyaltiesas8aJGX, {from: "0x0000000000000000000000000000000000000001"});
		await contractGrpO4X.updateMolBank.call(_molBanktnMVHBP, {from: accounts[0]});
		await contractGrpO4X.giftLexART.call(tokenAddressQjxANOq, tokenIdXBTtpQx, communityAddressaVavjCy, {from: accounts[1]});

		await expect(contractGrpO4X.scribeNFT.call(tokenAddresse0DWPNn, tokenIdUT6jo0X, communityAddressonbQc0R, startingRoyaltiesas8aJGX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractP2xG06c = await MolScribe.new({from: accounts[0]});
		const transactionValueU3ZDM9h = BigInt("1191")
		const buyerRdL7Rb = accounts[4]
		const tokenIdSWT5VIY = BigInt("1580")
		const tokenAddressIbeQQcI = accounts[2]
		const tokenIduHbujxm = BigInt("1615")
		const tokenAddressa4pZV7A = accounts[3]
		await contractP2xG06c.makeOffer.call(tokenAddressIbeQQcI, tokenIdSWT5VIY, buyerRdL7Rb, transactionValueU3ZDM9h, {from: "0x0000000000000000000000000000000000000001"});
		const nullpXX4RkM = await contractP2xG06c.getTokenKey.call(tokenAddressa4pZV7A, tokenIduHbujxm, {from: accounts[0]});

		await expect(contractP2xG06c.makeOffer.call(tokenAddressIbeQQcI, tokenIdSWT5VIY, buyerRdL7Rb, transactionValueU3ZDM9h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracthFBRd9L = await MolScribe.new({from: accounts[0]});
		const tokenIdNh7JtQI = BigInt("1869")
		const tokenAddressgait3dq = accounts[0]
		const transactionValueJGNObAO = BigInt("1191")
		const buyergZGh8G9 = accounts[4]
		const tokenIdkXTlOvT = BigInt("1580")
		const tokenAddresstIkuou = accounts[3]
		await contracthFBRd9L.acceptOffer.call(tokenAddressgait3dq, tokenIdNh7JtQI, {from: accounts[5]});
		await contracthFBRd9L.makeOffer.call(tokenAddresstIkuou, tokenIdkXTlOvT, buyergZGh8G9, transactionValueJGNObAO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracthFBRd9L.acceptOffer.call(tokenAddressgait3dq, tokenIdNh7JtQI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractNgQOJ9a = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const startingRoyaltiesg9oIeEr = BigInt("52")
		const communityAddresszc33Rg7 = accounts[5]
		const tokenIde15PC38 = BigInt("832")
		const tokenAddresssd4qUVo = accounts[1]
		const _molBankcybEL5p = accounts[4]
		const communityAddressnTWDoMd = accounts[0]
		const tokenIdW3DgfDV = BigInt("533")
		const tokenAddressybbNTQD = "0x0000000000000000000000000000000000000001"
		await contractNgQOJ9a.scribeNFT.call(tokenAddresssd4qUVo, tokenIde15PC38, communityAddresszc33Rg7, startingRoyaltiesg9oIeEr, {from: accounts[0]});
		await contractNgQOJ9a.updateMolBank.call(_molBankcybEL5p, {from: accounts[3]});
		await contractNgQOJ9a.giftLexART.call(tokenAddressybbNTQD, tokenIdW3DgfDV, communityAddressnTWDoMd, {from: accounts[0]});
	});
})