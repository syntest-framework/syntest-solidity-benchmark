const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaGSfCMm = await PlasmaswapPair.new({from: accounts[3]});
		const addresszrxWZwK = accounts[3]
		const addressY0RFZU8 = accounts[3]
		const addressxabgBgv = accounts[4]
		const addressKMQ36ib = accounts[0]
//		const uintCR3mFtp = await PlasmaswapPairaGSfCMm.burn.call(addresszrxWZwK, {from: accounts[1]});
//		const addressfsYfRgj = await PlasmaswapPairaGSfCMm.initialize.call(addressxabgBgv, addressY0RFZU8, {from: "0x0000000000000000000000000000000000000001"});
//		const uintWy9lxH = await PlasmaswapPairaGSfCMm.mint.call(addressKMQ36ib, {from: accounts[5]});

		await expect(PlasmaswapPairaGSfCMm.burn.call(addresszrxWZwK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairxMuZoZ3 = await PlasmaswapPair.new({from: accounts[0]});
		const bytesPLEbwP = "0x02051010030a04120c07201c020e1c0e0517041d071d0418031c0c10050c"
		const addressd792iIo = accounts[4]
		const uintw8fa8Oh = BigInt("1809")
		const uintZSNBl9v = BigInt("267")
		const addressqduTjQb = accounts[5]
		const addressHTZzdR = "0x0000000000000000000000000000000000000001"
		const byteFmXcF6C = "0x1111080c19"
		const addresseo7eXAj = accounts[5]
		const uintlVV9R6J = BigInt("702")
		const uintUhqPQOD = BigInt("727")
//		const uintCsQdbsW = await PlasmaswapPairxMuZoZ3.swap.call(uintZSNBl9v, uintw8fa8Oh, addressd792iIo, bytesPLEbwP, {from: accounts[3]});
//		const addressHyLPn3o = await PlasmaswapPairxMuZoZ3.initialize.call(addressHTZzdR, addressqduTjQb, {from: accounts[1]});
//		const uintzftPehW = await PlasmaswapPairxMuZoZ3.swap.call(uintUhqPQOD, uintlVV9R6J, addresseo7eXAj, byteFmXcF6C, {from: accounts[3]});
//		await PlasmaswapPairxMuZoZ3.lock.call({from: accounts[0]});

		await expect(PlasmaswapPairxMuZoZ3.swap.call(uintZSNBl9v, uintw8fa8Oh, addressd792iIo, bytesPLEbwP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfnbZc3y = await PlasmaswapPair.new({from: accounts[1]});
		const addressPe8Icu = accounts[3]
		const addressBY7BP63 = "0x0000000000000000000000000000000000000001"
		const addressHzWNu40 = accounts[0]
		const addressV4UDS5M = accounts[4]
//		const uintwjX9lBr = await PlasmaswapPairfnbZc3y.mint.call(addressPe8Icu, {from: accounts[0]});
//		const addressF5F4Aw4 = await PlasmaswapPairfnbZc3y.initialize.call(addressHzWNu40, addressBY7BP63, {from: accounts[4]});
//		const addressNuafVjG = await PlasmaswapPairfnbZc3y.skim.call(addressV4UDS5M, {from: accounts[3]});

		await expect(PlasmaswapPairfnbZc3y.mint.call(addressPe8Icu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZTK9EWT = await PlasmaswapPair.new({from: accounts[4]});
		const addressfjSZj99 = accounts[3]
		const bytewplU3sb = "0x1a040e03100215021c201909150c0609200705090112161301111318"
		const addressJLsInIN = accounts[2]
		const uintZNr1ztu = BigInt("288")
		const uint1VD7DM = BigInt("242")
		const addresswH5TsXf = accounts[5]
//		await PlasmaswapPairZTK9EWT.sync.call({from: accounts[1]});
//		const uintExEHMTj = await PlasmaswapPairZTK9EWT.burn.call(addressfjSZj99, {from: "0x0000000000000000000000000000000000000001"});
//		await PlasmaswapPairZTK9EWT.lock.call({from: accounts[4]});
//		const uint5Pa9KW = await PlasmaswapPairZTK9EWT.swap.call(uint1VD7DM, uintZNr1ztu, addressJLsInIN, bytewplU3sb, {from: accounts[4]});
//		const uintbarwkS = await PlasmaswapPairZTK9EWT.mint.call(addresswH5TsXf, {from: accounts[2]});

		await expect(PlasmaswapPairZTK9EWT.sync.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairyQlyt6l = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszTTKvVA = "0x0000000000000000000000000000000000000001"
		const addressu4wfsS8 = accounts[0]
		const addresss1MRhp5 = "0x0000000000000000000000000000000000000001"
		await PlasmaswapPairyQlyt6l.lock.call({from: accounts[0]});
		const uintWZYN3Uq = await PlasmaswapPairyQlyt6l.mint.call(addresszTTKvVA, {from: accounts[2]});
		const uintEDDIuTD = await PlasmaswapPairyQlyt6l.mint.call(addressu4wfsS8, {from: accounts[2]});
		const addressjsntF19 = await PlasmaswapPairyQlyt6l.skim.call(addresss1MRhp5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairaGSfCMm = await PlasmaswapPair.new({from: accounts[3]});
		const addressgjz2VVP = "0x0000000000000000000000000000000000000001"
		const addressvLgfebI = accounts[4]
		const addressy77fSdQ = accounts[3]
		const addresseYHp4V = accounts[4]
		const address2dv5uw = accounts[0]
//		const addressq9QqjZW = await PlasmaswapPairaGSfCMm.skim.call(addressgjz2VVP, {from: accounts[4]});
//		const uintCR3mFtp = await PlasmaswapPairaGSfCMm.burn.call(addressvLgfebI, {from: accounts[1]});
//		const addressfsYfRgj = await PlasmaswapPairaGSfCMm.initialize.call(addresseYHp4V, addressy77fSdQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uintWy9lxH = await PlasmaswapPairaGSfCMm.mint.call(address2dv5uw, {from: accounts[5]});

		await expect(PlasmaswapPairaGSfCMm.skim.call(addressgjz2VVP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfnbZc3y = await PlasmaswapPair.new({from: accounts[1]});
		const addressrJCU7pl = "0x0000000000000000000000000000000000000001"
		const addressGMEx87O = accounts[0]
		const addresseFjIclx = accounts[4]
//		const addressF5F4Aw4 = await PlasmaswapPairfnbZc3y.initialize.call(addressGMEx87O, addressrJCU7pl, {from: accounts[4]});
//		const addressNuafVjG = await PlasmaswapPairfnbZc3y.skim.call(addresseFjIclx, {from: accounts[3]});

		await expect(PlasmaswapPairfnbZc3y.initialize.call(addressGMEx87O, addressrJCU7pl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfnbZc3y = await PlasmaswapPair.new({from: accounts[1]});
		const addressaMnyeY9 = accounts[4]
		const addressMHoCCW = accounts[3]
		const addressqGqRdjE = accounts[4]
//		await PlasmaswapPairfnbZc3y.lock.call({from: accounts[1]});
//		const addresszEWiDJb = await PlasmaswapPairfnbZc3y.initialize.call(addressMHoCCW, addressaMnyeY9, {from: accounts[4]});
//		const addressNuafVjG = await PlasmaswapPairfnbZc3y.skim.call(addressqGqRdjE, {from: accounts[3]});

		await expect(PlasmaswapPairfnbZc3y.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})