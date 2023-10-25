const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressZuzVPoZ = "0x0000000000000000000000000000000000000001"
		const BAEynHwGns = await BAE.new(addressZuzVPoZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintUz3HO2E = BigInt("675")
		const uinti6DdnaP = BigInt("1980")
		const uinttDVATbk = BigInt("454")
		const uintO60pCcA = BigInt("1245")
		const uintNd0grdr = BigInt("1960")
		const uintW28OwsP = BigInt("189")
		const uintetq6X3J = BigInt("245")
		const uintzIhZUft = BigInt("1409")
		const uintJ9Ee068 = BigInt("1673")
		const uint256VgfwQKI = await BAEynHwGns.resetAuction.call(uinttDVATbk, uinti6DdnaP, uintUz3HO2E, {from: accounts[1]});
		const uint256rtqSjeX = await BAEynHwGns.createAuction.call(uintetq6X3J, uintW28OwsP, uintNd0grdr, uintO60pCcA, {from: accounts[2]});
		const uint256a9LKuZU = await BAEynHwGns.changePrintFee.call(uintzIhZUft, {from: accounts[5]});
		const uint256KHGa4oY = await BAEynHwGns.bid.call(uintJ9Ee068, {from: accounts[0]});
	});

	it('test for BAE', async () => {
		const addressRv7vdUt = accounts[4]
		const BAEaBzVE4F = await BAE.new(addressRv7vdUt, {from: accounts[4]});
		const uintAarsBw = BigInt("1040")
		const uintJemX5uo = BigInt("1623")
		const uintWg5Pm2g = BigInt("2022")
		const uintDZTltEe = BigInt("1599")
		const uintRGXFBhb = BigInt("339")
		const uintY08ApsG = BigInt("1203")
		const uintMWdCgw9 = BigInt("1166")
//		const uint2567Xz5BJ = await BAEaBzVE4F.bid.call(uintAarsBw, {from: accounts[4]});
//		const uint256IbM91Sm = await BAEaBzVE4F.concludeAuction.call(uintJemX5uo, {from: accounts[3]});
//		const uint256cd8vAmf = await BAEaBzVE4F.setAuctionFee.call(uintWg5Pm2g, {from: accounts[3]});
//		const uint256ifHtqvt = await BAEaBzVE4F.createAuction.call(uintMWdCgw9, uintY08ApsG, uintRGXFBhb, uintDZTltEe, {from: accounts[4]});

		await expect(BAEaBzVE4F.bid.call(uintAarsBw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscbmNP60 = accounts[1]
		const BAEkG0fGAK = await BAE.new(addresscbmNP60, {from: accounts[2]});
		const uintCqq6Ev6 = BigInt("1676")
		const uintiWmdvNb = BigInt("1602")
		const uintoDiWM9b = BigInt("1575")
		const uintDKMz9k = BigInt("1923")
		const uintN809vX = BigInt("186")
//		const uint256R8YMqe4 = await BAEkG0fGAK.setAuctionFee.call(uintCqq6Ev6, {from: accounts[3]});
//		const uint256PSdDn3w = await BAEkG0fGAK.createAuction.call(uintN809vX, uintDKMz9k, uintoDiWM9b, uintiWmdvNb, {from: accounts[2]});

		await expect(BAEkG0fGAK.setAuctionFee.call(uintCqq6Ev6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOZnkGhg = "0x0000000000000000000000000000000000000001"
		const BAETlkdWEH = await BAE.new(addressOZnkGhg, {from: accounts[2]});
		const uintLLKq9zR = BigInt("190")
		const uintgfMGvxp = BigInt("1089")
		const uintDpp7dbW = BigInt("1087")
		const uintoFfwQXq = BigInt("1718")
		const uintz1hrvfY = BigInt("799")
		const uint4rKjzC = BigInt("1016")
		const uintmYvdhBQ = BigInt("1400")
		const uintu5B3PXz = BigInt("1489")
		const uintJfz7sdS = BigInt("311")
		const uintF9dkjm = BigInt("980")
		const uintztedVbO = BigInt("700")
//		const uint256Oz7AC3j = await BAETlkdWEH.createAuction.call(uintoFfwQXq, uintDpp7dbW, uintgfMGvxp, uintLLKq9zR, {from: accounts[0]});
//		const uint256ex4OmqJ = await BAETlkdWEH.createAuction.call(uintu5B3PXz, uintmYvdhBQ, uint4rKjzC, uintz1hrvfY, {from: accounts[4]});
//		const uint256N3vFBy = await BAETlkdWEH.bid.call(uintJfz7sdS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256qVLrn3p = await BAETlkdWEH.bid.call(uintF9dkjm, {from: accounts[0]});
//		const uint256CHbKDz1 = await BAETlkdWEH.setAuctionFee.call(uintztedVbO, {from: accounts[1]});

		await expect(BAETlkdWEH.createAuction.call(uintoFfwQXq, uintDpp7dbW, uintgfMGvxp, uintLLKq9zR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressAO6SAot = accounts[2]
		const BAEUNW5Fem = await BAE.new(addressAO6SAot, {from: accounts[2]});
		const uinthMHLXHG = BigInt("219")
		const uint8aeoEW = BigInt("349")
		const uinttP5Aoe = BigInt("1257")
		const uintK05oSfD = BigInt("666")
		const uintxvMRqS1 = BigInt("38")
		const uintyS1NJ5T = BigInt("371")
		const uintUigm340 = BigInt("813")
//		const uint256p7oo0Yw = await BAEUNW5Fem.resetAuction.call(uinttP5Aoe, uint8aeoEW, uinthMHLXHG, {from: accounts[2]});
//		const uint256iu0E8sS = await BAEUNW5Fem.setAuctionFee.call(uintK05oSfD, {from: accounts[1]});
//		const uint256c0bl2Eb = await BAEUNW5Fem.resetAuction.call(uintUigm340, uintyS1NJ5T, uintxvMRqS1, {from: accounts[3]});

		await expect(BAEUNW5Fem.resetAuction.call(uinttP5Aoe, uint8aeoEW, uinthMHLXHG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressPMYSFt8 = accounts[2]
		const BAEMMj87q = await BAE.new(addressPMYSFt8, {from: accounts[0]});
		const uintLaks8r = BigInt("683")
		const uintqq17uU = BigInt("239")
//		const uint256YmSBP5N = await BAEMMj87q.buy.call(uintLaks8r, {from: accounts[4]});
//		const uint256s7Ncua = await BAEMMj87q.bid.call(uintqq17uU, {from: accounts[3]});

		await expect(BAEMMj87q.buy.call(uintLaks8r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressz2jgWgg = accounts[4]
		const BAEaBzVE4F = await BAE.new(addressz2jgWgg, {from: accounts[4]});
		const uintPhyc9rO = BigInt("1623")
		const uintmw8Af9x = BigInt("2022")
//		const uint256IbM91Sm = await BAEaBzVE4F.concludeAuction.call(uintPhyc9rO, {from: accounts[3]});
//		const uint256cd8vAmf = await BAEaBzVE4F.setAuctionFee.call(uintmw8Af9x, {from: accounts[3]});

		await expect(BAEaBzVE4F.concludeAuction.call(uintPhyc9rO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})