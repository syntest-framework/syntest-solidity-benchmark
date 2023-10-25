const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairObmsiZn = await PlasmaswapPair.new({from: accounts[1]});
		const address6BBWGC = accounts[3]
		const addresslD6B5TG = accounts[0]
		const addressrrTgdqm = "0x0000000000000000000000000000000000000001"
		const uint112WXTdIZQ = await PlasmaswapPairObmsiZn.getReserves.call({from: accounts[3]});
//		const uintEsfIZTI = await PlasmaswapPairObmsiZn.mint.call(address6BBWGC, {from: accounts[3]});
//		const uintEPvDFsW = await PlasmaswapPairObmsiZn.burn.call(addresslD6B5TG, {from: accounts[4]});
//		const addressPzghz0U = await PlasmaswapPairObmsiZn.skim.call(addressrrTgdqm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairObmsiZn.mint.call(address6BBWGC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairedt42q = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqwpPPS3 = accounts[0]
		const addressOH8XC9X = accounts[2]
		const addressoQGWtWu = await PlasmaswapPairedt42q.initialize.call(addressOH8XC9X, addressqwpPPS3, {from: accounts[5]});
		const uint112wFS4J8B = await PlasmaswapPairedt42q.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		await PlasmaswapPairedt42q.sync.call({from: accounts[3]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHPgWKj = await PlasmaswapPair.new({from: accounts[2]});
		const addressWRUztEK = accounts[4]
		const addressa9umrZS = accounts[1]
		const bytefX6uQLC = "0x1c0a141e1507101d20"
		const addressk8JmxIU = "0x0000000000000000000000000000000000000001"
		const uintYlJNuwx = BigInt("1323")
		const uintYhHHTyD = BigInt("122")
		const addressU84NHIr = "0x0000000000000000000000000000000000000001"
		const addressjinyy02 = accounts[4]
//		const uintwD70IvD = await PlasmaswapPairHPgWKj.burn.call(addressWRUztEK, {from: accounts[2]});
//		const uintsH37pI = await PlasmaswapPairHPgWKj.mint.call(addressa9umrZS, {from: accounts[4]});
//		const uintwJ4Fj9P = await PlasmaswapPairHPgWKj.swap.call(uintYhHHTyD, uintYlJNuwx, addressk8JmxIU, bytefX6uQLC, {from: accounts[3]});
//		const addressLh7jlTO = await PlasmaswapPairHPgWKj.initialize.call(addressjinyy02, addressU84NHIr, {from: accounts[1]});

		await expect(PlasmaswapPairHPgWKj.burn.call(addressWRUztEK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairYuMGhs1 = await PlasmaswapPair.new({from: accounts[3]});
		const address76x900 = accounts[5]
		const addressYy2sIr = accounts[4]
		const addressyTmq49T = accounts[0]
		const addressmEw1ls8 = "0x0000000000000000000000000000000000000001"
//		const addressEY7Whhx = await PlasmaswapPairYuMGhs1.initialize.call(addressYy2sIr, address76x900, {from: accounts[5]});
//		const uinth4mFzjE = await PlasmaswapPairYuMGhs1.mint.call(addressyTmq49T, {from: accounts[2]});
//		const addressWAPq5tK = await PlasmaswapPairYuMGhs1.skim.call(addressmEw1ls8, {from: accounts[3]});
//		await PlasmaswapPairYuMGhs1.lock.call({from: accounts[1]});

		await expect(PlasmaswapPairYuMGhs1.initialize.call(addressYy2sIr, address76x900, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairdG8h1Hb = await PlasmaswapPair.new({from: accounts[2]});
		const byteNQ3b7rM = "0x1a1713121a081f1c180c150e0c081720180212050406161d0b"
		const addressjBYg1z = accounts[0]
		const uintItezrZ5 = BigInt("503")
		const uintbo1wz42 = BigInt("1874")
		const addressgzpABM = accounts[4]
		const byteMRcle9 = "0x071408080d02"
		const addressMc23BH = accounts[0]
		const uintNcNy4sA = BigInt("1157")
		const uintF1ZLcTH = BigInt("1907")
//		const uintIZHTx7N = await PlasmaswapPairdG8h1Hb.swap.call(uintbo1wz42, uintItezrZ5, addressjBYg1z, byteNQ3b7rM, {from: accounts[1]});
//		const addressQCLAbi2 = await PlasmaswapPairdG8h1Hb.skim.call(addressgzpABM, {from: accounts[0]});
//		const uintApHQsrs = await PlasmaswapPairdG8h1Hb.swap.call(uintF1ZLcTH, uintNcNy4sA, addressMc23BH, byteMRcle9, {from: accounts[4]});
//		const uint112Afe73L = await PlasmaswapPairdG8h1Hb.getReserves.call({from: accounts[3]});

		await expect(PlasmaswapPairdG8h1Hb.swap.call(uintbo1wz42, uintItezrZ5, addressjBYg1z, byteNQ3b7rM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairY7Q1ENL = await PlasmaswapPair.new({from: accounts[2]});
		const addressw33uNWy = accounts[2]
		const addressaj9SYow = accounts[0]
		const addressTSRpUAu = accounts[1]
		const addressUBLO6Oc = accounts[3]
		const bytejbncqQn = "0x1b1213191f041111021a080913191817070c161c171013161a1d0301"
		const addressNrSucvf = accounts[5]
		const uintckPDz1B = BigInt("1164")
		const uintIISpR3L = BigInt("204")
		const addressCnvo9xn = await PlasmaswapPairY7Q1ENL.initialize.call(addressaj9SYow, addressw33uNWy, {from: accounts[2]});
//		const uintrd65zF = await PlasmaswapPairY7Q1ENL.mint.call(addressTSRpUAu, {from: accounts[3]});
//		const uint112jcWBImC = await PlasmaswapPairY7Q1ENL.getReserves.call({from: accounts[5]});
//		const addresspDtnuAs = await PlasmaswapPairY7Q1ENL.skim.call(addressUBLO6Oc, {from: accounts[4]});
//		const uintWB71Wml = await PlasmaswapPairY7Q1ENL.swap.call(uintIISpR3L, uintckPDz1B, addressNrSucvf, bytejbncqQn, {from: accounts[2]});

		await expect(PlasmaswapPairY7Q1ENL.mint.call(addressTSRpUAu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairOlFSUXp = await PlasmaswapPair.new({from: accounts[4]});
		const addressZejQHNk = accounts[6]
//		await PlasmaswapPairOlFSUXp.lock.call({from: accounts[2]});
//		const uintIG9iImp = await PlasmaswapPairOlFSUXp.burn.call(addressZejQHNk, {from: accounts[1]});

		await expect(PlasmaswapPairOlFSUXp.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairOlFSUXp = await PlasmaswapPair.new({from: accounts[4]});
		const addressiLfi4F0 = accounts[5]
		const addressxMGpxU8 = accounts[5]
//		const addressODblfPh = await PlasmaswapPairOlFSUXp.skim.call(addressiLfi4F0, {from: accounts[1]});
//		const uint112uPeJqcZ = await PlasmaswapPairOlFSUXp.getReserves.call({from: accounts[0]});
//		const uintIG9iImp = await PlasmaswapPairOlFSUXp.burn.call(addressxMGpxU8, {from: accounts[1]});

		await expect(PlasmaswapPairOlFSUXp.skim.call(addressiLfi4F0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHsKCQsb = await PlasmaswapPair.new({from: accounts[2]});
		const bytekRqBD7 = "0x16061c0218"
		const addressEX7VGK = accounts[1]
		const uintB1QNcbR = BigInt("1430")
		const uintnTLycnn = BigInt("984")
		const byteQz1fzCQ = "0x0c0403111d0d1410041d0d060c1b1903190f00071b17151b160218010a0b17"
		const addressLWQR2Su = accounts[1]
		const uintRvGcdNy = BigInt("128")
		const uintzXfMVmp = BigInt("1")
		const addressS2CRNga = accounts[0]
//		await PlasmaswapPairHsKCQsb.sync.call({from: accounts[2]});
//		const uintkHcCSWH = await PlasmaswapPairHsKCQsb.swap.call(uintnTLycnn, uintB1QNcbR, addressEX7VGK, bytekRqBD7, {from: accounts[4]});
//		const uintmhsOqKM = await PlasmaswapPairHsKCQsb.swap.call(uintzXfMVmp, uintRvGcdNy, addressLWQR2Su, byteQz1fzCQ, {from: accounts[4]});
//		const uintNcYJbHw = await PlasmaswapPairHsKCQsb.mint.call(addressS2CRNga, {from: accounts[2]});

		await expect(PlasmaswapPairHsKCQsb.sync.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})