const MolScribe = artifacts.require("MolScribe");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MolScribe', (accounts) => {
	it('test for MolScribe', async () => {
		const contractUEQ7WIZ = await MolScribe.new({from: accounts[1]});
		const _molBankht8Ekq = accounts[3]
		const tokenIdXVfgIxe = BigInt("509")
		const tokenAddressA8YCQ3F = accounts[0]
		const tokenIdkeOKnW5 = BigInt("2030")
		const tokenAddresstX1mBu = accounts[0]
		const _molFeetvKh8Gh = BigInt("1684")
		await contractUEQ7WIZ.updateMolBank.call(_molBankht8Ekq, {from: accounts[4]});
		await contractUEQ7WIZ.acceptOffer.call(tokenAddressA8YCQ3F, tokenIdXVfgIxe, {from: accounts[0]});
		await contractUEQ7WIZ.acceptOffer.call(tokenAddresstX1mBu, tokenIdkeOKnW5, {from: accounts[0]});
		await contractUEQ7WIZ.updateMolFees.call(_molFeetvKh8Gh, {from: accounts[3]});

		await expect(contractUEQ7WIZ.updateMolBank.call(_molBankht8Ekq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractcKl3ZRn = await MolScribe.new({from: "0x0000000000000000000000000000000000000001"});
		const communityAddressGOra4be = accounts[1]
		const tokenIdI4S8v2m = BigInt("1653")
		const tokenAddressQIm9Hy6 = accounts[5]
		const startingRoyaltiesYaitPhp = BigInt("124")
		const communityAddressSl1pfyH = accounts[5]
		const tokenIdv4u4n4 = BigInt("2008")
		const tokenAddressqTED6JE = accounts[1]
		const _molFeeAGKjaft = BigInt("153")
		const _molFrHUyuT = accounts[0]
		const _molBankX0vtmAk = accounts[2]
		await contractcKl3ZRn.giftLexART.call(tokenAddressQIm9Hy6, tokenIdI4S8v2m, communityAddressGOra4be, {from: accounts[2]});
		await contractcKl3ZRn.scribeNFT.call(tokenAddressqTED6JE, tokenIdv4u4n4, communityAddressSl1pfyH, startingRoyaltiesYaitPhp, {from: accounts[0]});
		await contractcKl3ZRn.updateMolFees.call(_molFeeAGKjaft, {from: accounts[4]});
		await contractcKl3ZRn.updateMol.call(_molFrHUyuT, {from: accounts[3]});
		await contractcKl3ZRn.updateMolBank.call(_molBankX0vtmAk, {from: accounts[1]});
	});

	it('test for MolScribe', async () => {
		const contractxmwIrql = await MolScribe.new({from: accounts[1]});
		const tokenIdLcwGIqS = BigInt("1890")
		const tokenAddressb148Bf = accounts[4]
		const tokenIdU6VD8Xy = BigInt("1314")
		const tokenAddresslY4lMqR = accounts[3]
		const _molsawxCKq = accounts[3]
		const nullJ6l74MD = await contractxmwIrql.getTokenKey.call(tokenAddressb148Bf, tokenIdLcwGIqS, {from: accounts[4]});
		const nullSGyHNvX = await contractxmwIrql.getTokenKey.call(tokenAddresslY4lMqR, tokenIdU6VD8Xy, {from: accounts[1]});
		await contractxmwIrql.updateMol.call(_molsawxCKq, {from: accounts[4]});

		assert.equal(nullJ6l74MD, 0x6a3572e1f14b915f95d840d92e028fc55abb59610000000000000000000000000000000000000000000000000000000000000762)
		assert.equal(nullSGyHNvX, 0xd7e479e620010d7e8423e46c1387d7d4b421c2050000000000000000000000000000000000000000000000000000000000000522)
		await expect(contractxmwIrql.updateMol.call(_molsawxCKq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contract4yvGMP = await MolScribe.new({from: accounts[5]});
		const startingRoyaltiesIT0hjC4 = BigInt("42")
		const communityAddressXyDU6xr = accounts[4]
		const tokenIdetogPiJ = BigInt("1535")
		const tokenAddressQBqdByj = accounts[0]
		const tokenIdcxLT8b1 = BigInt("987")
		const tokenAddressjyUXTEl = accounts[3]
		const _molFeeKrIluuh = BigInt("787")
		const tokenIdP5XGuEu = BigInt("1127")
		const tokenAddressOryLoiW = accounts[0]
		await contract4yvGMP.scribeNFT.call(tokenAddressQBqdByj, tokenIdetogPiJ, communityAddressXyDU6xr, startingRoyaltiesIT0hjC4, {from: "0x0000000000000000000000000000000000000001"});
		const nullNJXGrT = await contract4yvGMP.getTokenKey.call(tokenAddressjyUXTEl, tokenIdcxLT8b1, {from: accounts[3]});
		await contract4yvGMP.updateMolFees.call(_molFeeKrIluuh, {from: accounts[1]});
		await contract4yvGMP.acceptOffer.call(tokenAddressOryLoiW, tokenIdP5XGuEu, {from: accounts[1]});

		await expect(contract4yvGMP.scribeNFT.call(tokenAddressQBqdByj, tokenIdetogPiJ, communityAddressXyDU6xr, startingRoyaltiesIT0hjC4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractUFjzDd = await MolScribe.new({from: accounts[3]});
		const tokenIdKLPQDZ = BigInt("761")
		const tokenAddresst4MaDUn = accounts[3]
		const _molFeerRV6gqv = BigInt("702")
		const transactionValuebdoDREQ = BigInt("1188")
		const buyerBxRv8Vk = "0x0000000000000000000000000000000000000001"
		const tokenIdp0cH50k = BigInt("485")
		const tokenAddressMC9wPyv = accounts[0]
		const startingRoyaltiesOF8PSHF = BigInt("8")
		const communityAddressuWSbNH3 = accounts[0]
		const tokenIdw1f2079 = BigInt("1353")
		const tokenAddresswwuufG0 = accounts[4]
		const startingRoyaltiesYDZruaw = BigInt("31")
		const communityAddressxB7eYRV = accounts[2]
		const tokenIdvnJ5v6g = BigInt("619")
		const tokenAddressFSdKmed = accounts[4]
		await contractUFjzDd.acceptOffer.call(tokenAddresst4MaDUn, tokenIdKLPQDZ, {from: accounts[4]});
		await contractUFjzDd.updateMolFees.call(_molFeerRV6gqv, {from: accounts[4]});
		await contractUFjzDd.makeOffer.call(tokenAddressMC9wPyv, tokenIdp0cH50k, buyerBxRv8Vk, transactionValuebdoDREQ, {from: accounts[3]});
		await contractUFjzDd.scribeNFT.call(tokenAddresswwuufG0, tokenIdw1f2079, communityAddressuWSbNH3, startingRoyaltiesOF8PSHF, {from: accounts[2]});
		await contractUFjzDd.scribeNFT.call(tokenAddressFSdKmed, tokenIdvnJ5v6g, communityAddressxB7eYRV, startingRoyaltiesYDZruaw, {from: accounts[3]});

		await expect(contractUFjzDd.acceptOffer.call(tokenAddresst4MaDUn, tokenIdKLPQDZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contracthuhu31V = await MolScribe.new({from: accounts[3]});
		const transactionValueaqyHwPe = BigInt("1188")
		const buyergbuMqFv = "0x0000000000000000000000000000000000000001"
		const tokenId7iOtoJ = BigInt("485")
		const tokenAddressyx3NWe8 = accounts[0]
		await contracthuhu31V.makeOffer.call(tokenAddressyx3NWe8, tokenId7iOtoJ, buyergbuMqFv, transactionValueaqyHwPe, {from: accounts[3]});

		await expect(contracthuhu31V.makeOffer.call(tokenAddressyx3NWe8, tokenId7iOtoJ, buyergbuMqFv, transactionValueaqyHwPe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractAX4Gd5n = await MolScribe.new({from: accounts[3]});
		const communityAddressRL7rgTK = accounts[1]
		const tokenIdDrmUt08 = BigInt("711")
		const tokenAddressv1iEI4v = accounts[1]
		const transactionValueBKtk09F = BigInt("1188")
		const buyermcKRZgM = "0x0000000000000000000000000000000000000001"
		const tokenId9sf9dX = BigInt("485")
		const tokenAddressSzEdAvt = accounts[0]
		await contractAX4Gd5n.giftLexART.call(tokenAddressv1iEI4v, tokenIdDrmUt08, communityAddressRL7rgTK, {from: accounts[1]});
		await contractAX4Gd5n.makeOffer.call(tokenAddressSzEdAvt, tokenId9sf9dX, buyermcKRZgM, transactionValueBKtk09F, {from: accounts[3]});

		await expect(contractAX4Gd5n.giftLexART.call(tokenAddressv1iEI4v, tokenIdDrmUt08, communityAddressRL7rgTK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MolScribe', async () => {
		const contractMU4jJy6 = await MolScribe.new({from: accounts[3]});
		const transactionValuebG7zjSJ = BigInt("1188")
		const buyerFksbQZN = "0x00000000000000000000000000000000000000-1"
		const tokenIdLJzXbOA = BigInt("485")
		const tokenAddressReoVXMT = accounts[0]
		await contractMU4jJy6.makeOffer.call(tokenAddressReoVXMT, tokenIdLJzXbOA, buyerFksbQZN, transactionValuebG7zjSJ, {from: accounts[3]});

		await expect(contractMU4jJy6.makeOffer.call(tokenAddressReoVXMT, tokenIdLJzXbOA, buyerFksbQZN, transactionValuebG7zjSJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})