const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractwYoyTHh = await MolScribe.new({from: accounts[3]});
		const tokenIdVOMGOs2 = BigInt("138")
		const tokenAddressMJCcU5s = accounts[4]
		const tokenIdDeo7v1j = BigInt("1268")
		const tokenAddressh4johZ = accounts[0]
		const communityAddresskAl35Gu = accounts[5]
		const tokenIdQj1gBio = BigInt("972")
		const tokenAddressyooWZEN = "0x0000000000000000000000000000000000000001"
		const _molFee7OMMp7 = BigInt("1346")
		const startingRoyaltiespZ2iPOM = BigInt("174")
		const communityAddressjGiayPT = accounts[1]
		const tokenIda3DX2dv = BigInt("1417")
		const tokenAddressd9ECG0p = accounts[0]
		const nullXlrMM3L = await contractwYoyTHh.getTokenKey.call(tokenAddressMJCcU5s, tokenIdVOMGOs2, {from: accounts[3]});
		await contractwYoyTHh.acceptOffer.call(tokenAddressh4johZ, tokenIdDeo7v1j, {from: accounts[4]});
		await contractwYoyTHh.giftLexART.call(tokenAddressyooWZEN, tokenIdQj1gBio, communityAddresskAl35Gu, {from: accounts[3]});
		await contractwYoyTHh.updateMolFees.call(_molFee7OMMp7, {from: accounts[3]});
		await contractwYoyTHh.scribeNFT.call(tokenAddressd9ECG0p, tokenIda3DX2dv, communityAddressjGiayPT, startingRoyaltiespZ2iPOM, {from: accounts[0]});

		assert.equal(nullXlrMM3L, 0x3525ad8d9a2c79e7d5fad6b1bdb50ff9781d2a9e000000000000000000000000000000000000000000000000000000000000008a)
		await expect(contractwYoyTHh.acceptOffer.call(tokenAddressh4johZ, tokenIdDeo7v1j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractj1laj84 = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdu74bRpu = BigInt("860")
		const tokenAddressIRv5fck = accounts[4]
		const _moloCBgeW = accounts[3]
		const _molFeepatZX9 = BigInt("1922")
		const tokenIdQSoTXGh = BigInt("1064")
		const tokenAddress7dEeVF = accounts[3]
		const nullsZK20LH = await contractj1laj84.getTokenKey.call(tokenAddressIRv5fck, tokenIdu74bRpu, {from: accounts[3]});
		await contractj1laj84.updateMol.call(_moloCBgeW, {from: accounts[4]});
		await contractj1laj84.updateMolFees.call(_molFeepatZX9, {from: accounts[1]});
		const nullCN7OtKo = await contractj1laj84.getTokenKey.call(tokenAddress7dEeVF, tokenIdQSoTXGh, {from: accounts[4]});
	});

	it('test for MolScribe', async () => {
		const contractMKzCuat = await MolScribe.new({from: accounts[4]});
		const _molBankjrDcnmj = accounts[1]
		const tokenIdgS2fGsa = BigInt("454")
		const tokenAddressfdnBZjV = accounts[1]
		const _molFeeEOR77Q = BigInt("1310")
		const _molBankmpwrXG6 = accounts[3]
		const tokenIdwaEeuvS = BigInt("938")
		const tokenAddressjBccFG = accounts[2]
		await contractMKzCuat.updateMolBank.call(_molBankjrDcnmj, {from: accounts[1]});
		const nullTbILb1Z = await contractMKzCuat.getTokenKey.call(tokenAddressfdnBZjV, tokenIdgS2fGsa, {from: "0x0000000000000000000000000000000000000001"});
		await contractMKzCuat.updateMolFees.call(_molFeeEOR77Q, {from: accounts[4]});
		await contractMKzCuat.updateMolBank.call(_molBankmpwrXG6, {from: accounts[3]});
		await contractMKzCuat.acceptOffer.call(tokenAddressjBccFG, tokenIdwaEeuvS, {from: accounts[1]});

		await expect(contractMKzCuat.updateMolBank.call(_molBankjrDcnmj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractjMBvPJt = await MolScribe.new({from: accounts[2]});
		const tokenIdCZcF7TZ = BigInt("1502")
		const tokenAddressmLfvTY6 = accounts[1]
		const transactionValueJ9wGNg = BigInt("636")
		const buyerT2ywPph = accounts[0]
		const tokenIdwt7EZEL = BigInt("1296")
		const tokenAddressx42C1Sn = accounts[4]
		const _molBankNeNXFXm = accounts[3]
		const tokenIdWbg2u9j = BigInt("911")
		const tokenAddressMHgpMGA = accounts[1]
		const transactionValuetCAfu9X = BigInt("1429")
		const buyerT5koRBb = accounts[0]
		const tokenIdtV4wsj = BigInt("1339")
		const tokenAddresszaMBgjZ = accounts[0]
		const nullFareZmz = await contractjMBvPJt.getTokenKey.call(tokenAddressmLfvTY6, tokenIdCZcF7TZ, {from: accounts[3]});
		await contractjMBvPJt.makeOffer.call(tokenAddressx42C1Sn, tokenIdwt7EZEL, buyerT2ywPph, transactionValueJ9wGNg, {from: accounts[5]});
		await contractjMBvPJt.updateMolBank.call(_molBankNeNXFXm, {from: accounts[4]});
		const nullZrHY3sp = await contractjMBvPJt.getTokenKey.call(tokenAddressMHgpMGA, tokenIdWbg2u9j, {from: accounts[0]});
		await contractjMBvPJt.makeOffer.call(tokenAddresszaMBgjZ, tokenIdtV4wsj, buyerT5koRBb, transactionValuetCAfu9X, {from: accounts[1]});

		assert.equal(nullFareZmz, 0xf80fc1a048237b55897805ff26006dec345f33d000000000000000000000000000000000000000000000000000000000000005de)
		await expect(contractjMBvPJt.makeOffer.call(tokenAddressx42C1Sn, tokenIdwt7EZEL, buyerT2ywPph, transactionValueJ9wGNg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractmdvLGOZ = await MolScribe.new({from: accounts[1]});
		const communityAddressq5nN2AZ = accounts[2]
		const tokenIdqXnbOxH = BigInt("1255")
		const tokenAddressucbm5BP = "0x0000000000000000000000000000000000000001"
		const startingRoyaltiesjmLvXVS = BigInt("255")
		const communityAddressSTKRsxA = accounts[2]
		const tokenIdNo6amp = BigInt("208")
		const tokenAddressG3L9Ga2 = accounts[0]
		const tokenIdtjjO0g = BigInt("211")
		const tokenAddressZR1hMT = accounts[2]
		await contractmdvLGOZ.giftLexART.call(tokenAddressucbm5BP, tokenIdqXnbOxH, communityAddressq5nN2AZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractmdvLGOZ.scribeNFT.call(tokenAddressG3L9Ga2, tokenIdNo6amp, communityAddressSTKRsxA, startingRoyaltiesjmLvXVS, {from: accounts[0]});
		const nulld8zMDOm = await contractmdvLGOZ.getTokenKey.call(tokenAddressZR1hMT, tokenIdtjjO0g, {from: accounts[5]});

		await expect(contractmdvLGOZ.giftLexART.call(tokenAddressucbm5BP, tokenIdqXnbOxH, communityAddressq5nN2AZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractOXT0J1P = await MolScribe.new({from: accounts[1]});
		const startingRoyaltieswomHpM4 = BigInt("255")
		const communityAddressuIGHzcd = accounts[2]
		const tokenIdb53Sn22 = BigInt("208")
		const tokenAddressZEUuHSO = accounts[1]
		const startingRoyaltiesi6hZGUw = BigInt("224")
		const communityAddressVBH6pmc = accounts[4]
		const tokenIdpsXM46G = BigInt("1428")
		const tokenAddressljyBISH = accounts[3]
		const tokenIdAdnv1Yn = BigInt("211")
		const tokenAddresseQGY91B = accounts[2]
		await contractOXT0J1P.scribeNFT.call(tokenAddressZEUuHSO, tokenIdb53Sn22, communityAddressuIGHzcd, startingRoyaltieswomHpM4, {from: accounts[0]});
		await contractOXT0J1P.scribeNFT.call(tokenAddressljyBISH, tokenIdpsXM46G, communityAddressVBH6pmc, startingRoyaltiesi6hZGUw, {from: accounts[2]});
		const nullmh6DA9Q = await contractOXT0J1P.getTokenKey.call(tokenAddresseQGY91B, tokenIdAdnv1Yn, {from: accounts[5]});

		await expect(contractOXT0J1P.scribeNFT.call(tokenAddressZEUuHSO, tokenIdb53Sn22, communityAddressuIGHzcd, startingRoyaltieswomHpM4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})