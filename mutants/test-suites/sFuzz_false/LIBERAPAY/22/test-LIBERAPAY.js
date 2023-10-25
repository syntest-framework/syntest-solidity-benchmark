const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYlKRqrxq = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqiizUll = accounts[5]
		const uintlyNSrAH = BigInt("80")
		const addressD7xQYgb = accounts[4]
		const addressopvrSGO = accounts[0]
		const addressPLCl2i = await LIBERAPAYlKRqrxq.transferOwnership.call(addressqiizUll, {from: accounts[4]});
		const boolgcEerhK = await LIBERAPAYlKRqrxq.transfer.call(addressD7xQYgb, uintlyNSrAH, {from: accounts[5]});
		const uint256aebScZk = await LIBERAPAYlKRqrxq.balanceOf.call(addressopvrSGO, {from: accounts[2]});
		await LIBERAPAYlKRqrxq.whenPaused.call({from: accounts[3]});
		await LIBERAPAYlKRqrxq.onlyNewOwner.call({from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYv5I0G7Q = await LIBERAPAY.new({from: accounts[1]});
		const uintTTf41GR = BigInt("1825")
		const addressObzAEIx = accounts[2]
		const addresspCMprWU = accounts[2]
		const uinthDntr93 = BigInt("966")
		const addressf5TZhmk = accounts[1]
		const addressJPmsSqw = accounts[4]
//		const boolBgGvhjl = await LIBERAPAYv5I0G7Q.decreaseAllowance.call(addressObzAEIx, uintTTf41GR, {from: accounts[2]});
//		const addressymnZmPX = await LIBERAPAYv5I0G7Q.transferOwnership.call(addresspCMprWU, {from: accounts[2]});
//		const boolLPdAqja = await LIBERAPAYv5I0G7Q.unlock.call(addressf5TZhmk, uinthDntr93, {from: accounts[1]});
//		const uint256REsc0Az = await LIBERAPAYv5I0G7Q.balanceOf.call(addressJPmsSqw, {from: accounts[1]});

		await expect(LIBERAPAYv5I0G7Q.decreaseAllowance.call(addressObzAEIx, uintTTf41GR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addressKP9saN = accounts[3]
		const uintAn1r2O = BigInt("1716")
		const addressZKUnwOC = accounts[1]
		const uintmpxjtQ = BigInt("1526")
		const addressHkMcgB4 = accounts[3]
		const addressyNL8P3 = accounts[2]
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressKP9saN, {from: accounts[1]});
//		await LIBERAPAYKsUYXjV.pause.call({from: accounts[4]});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const booleOhxelI = await LIBERAPAYKsUYXjV.distribute.call(addressZKUnwOC, uintAn1r2O, {from: accounts[2]});
//		await LIBERAPAYKsUYXjV.showLockState.call(addressHkMcgB4, uintmpxjtQ, {from: accounts[2]});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressyNL8P3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYuTK0Ha = await LIBERAPAY.new({from: accounts[3]});
		const uintdRn01U = BigInt("619")
		const addressalXKbrH = accounts[1]
		const uintUH7D2oC = BigInt("750")
		const uint1QQdlm = BigInt("337")
		const addressyeWa7q9 = "0x0000000000000000000000000000000000000001"
		const boolWAIkrRR = await LIBERAPAYuTK0Ha.increaseAllowance.call(addressalXKbrH, uintdRn01U, {from: accounts[1]});
//		const booliWmgY4m = await LIBERAPAYuTK0Ha.lock.call(addressyeWa7q9, uint1QQdlm, uintUH7D2oC, {from: accounts[1]});
//		await LIBERAPAYuTK0Ha.onlyNewOwner.call({from: accounts[4]});
//		await LIBERAPAYuTK0Ha.onlyNewOwner.call({from: accounts[1]});

		assert.equal(boolWAIkrRR, true)
		await expect(LIBERAPAYuTK0Ha.lock.call(addressyeWa7q9, uint1QQdlm, uintUH7D2oC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYpt4vj7x = await LIBERAPAY.new({from: accounts[4]});
		const uintDDJA0Fd = BigInt("39")
		const addressDoivxAq = accounts[2]
		const uintQdPTmaF = BigInt("1132")
		const addressxwJXXBg = accounts[4]
		const uintyb7QD6o = BigInt("937")
		const addressLAE2oGB = accounts[1]
//		await LIBERAPAYpt4vj7x.showLockState.call(addressDoivxAq, uintDDJA0Fd, {from: accounts[1]});
//		const boolePJ9Ro8 = await LIBERAPAYpt4vj7x.burnFrom.call(addressxwJXXBg, uintQdPTmaF, {from: accounts[2]});
//		const booldI1JcUf = await LIBERAPAYpt4vj7x.burnFrom.call(addressLAE2oGB, uintyb7QD6o, {from: accounts[3]});
//		await LIBERAPAYpt4vj7x.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYpt4vj7x.showLockState.call(addressDoivxAq, uintDDJA0Fd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYi2FnHfg = await LIBERAPAY.new({from: accounts[2]});
		const uintymEujLP = BigInt("614")
		const addressLIXXpWM = accounts[2]
		const uintioMix4Z = BigInt("785")
		const addressn2I84f = accounts[1]
		const addressWFmJdrH = accounts[3]
		const uintnl0GHf6 = BigInt("1379")
		const addresslzdVXpd = accounts[4]
		const addressQ9LdtNr = accounts[1]
		const addressgvEVLKt = accounts[4]
		const uintG2VOKR = BigInt("1501")
		const addressy45aDdp = accounts[1]
//		const boolLn0ALaE = await LIBERAPAYi2FnHfg.unlock.call(addressLIXXpWM, uintymEujLP, {from: accounts[2]});
//		const boolmUsvBgd = await LIBERAPAYi2FnHfg.transferFrom.call(addressWFmJdrH, addressn2I84f, uintioMix4Z, {from: accounts[0]});
//		const boolHYUPXA4 = await LIBERAPAYi2FnHfg.transferFrom.call(addressQ9LdtNr, addresslzdVXpd, uintnl0GHf6, {from: accounts[2]});
//		const addressZS3QEim = await LIBERAPAYi2FnHfg.notFrozen.call(addressgvEVLKt, {from: accounts[2]});
//		const boolEIi9Aqi = await LIBERAPAYi2FnHfg.approve.call(addressy45aDdp, uintG2VOKR, {from: accounts[1]});

		await expect(LIBERAPAYi2FnHfg.unlock.call(addressLIXXpWM, uintymEujLP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addressZ6kCTr4 = accounts[3]
		const uintawS79MJ = BigInt("1716")
		const addresswgYEEG = accounts[1]
		const uintS7KRBEW = BigInt("1526")
		const addressmkqc8vt = accounts[3]
		const addresstbV7rWs = accounts[2]
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressZ6kCTr4, {from: accounts[1]});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const booleOhxelI = await LIBERAPAYKsUYXjV.distribute.call(addresswgYEEG, uintawS79MJ, {from: accounts[2]});
//		await LIBERAPAYKsUYXjV.showLockState.call(addressmkqc8vt, uintS7KRBEW, {from: accounts[2]});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addresstbV7rWs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addressu7tL8DD = accounts[3]
		const uintRBmV3HE = BigInt("1231")
		const addressKYz4AFd = accounts[2]
		const uint0dh1b3 = BigInt("1716")
		const addressuv4wJe0 = accounts[1]
		const addressONagbFB = accounts[2]
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressu7tL8DD, {from: accounts[1]});
//		const booluyeHYEL = await LIBERAPAYKsUYXjV.transfer.call(addressKYz4AFd, uintRBmV3HE, {from: accounts[0]});
//		await LIBERAPAYKsUYXjV.pause.call({from: accounts[4]});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const booleOhxelI = await LIBERAPAYKsUYXjV.distribute.call(addressuv4wJe0, uint0dh1b3, {from: accounts[2]});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressONagbFB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.transfer.call(addressKYz4AFd, uintRBmV3HE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addressmhXmI8 = accounts[3]
		const addressP31gJEo = accounts[3]
		const uintOywWerA = BigInt("1231")
		const addressMXov3k4 = accounts[2]
		const uintLDLdwA1 = BigInt("1716")
		const addressBRpmEpW = accounts[1]
		const uintmu5cMwR = BigInt("1394")
		const addressDN4cUOF = accounts[3]
		const addressgDpIEIO = accounts[2]
		const uint256Cbpvpbo = await LIBERAPAYKsUYXjV.balanceOf.call(addressmhXmI8, {from: accounts[3]});
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressP31gJEo, {from: accounts[1]});
//		const booluyeHYEL = await LIBERAPAYKsUYXjV.transfer.call(addressMXov3k4, uintOywWerA, {from: accounts[0]});
//		await LIBERAPAYKsUYXjV.pause.call({from: accounts[4]});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const booleOhxelI = await LIBERAPAYKsUYXjV.distribute.call(addressBRpmEpW, uintLDLdwA1, {from: accounts[2]});
//		const boolKaKpef9 = await LIBERAPAYKsUYXjV.transfer.call(addressDN4cUOF, uintmu5cMwR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressgDpIEIO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Cbpvpbo, BigInt("0"))
		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.transfer.call(addressMXov3k4, uintOywWerA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addressExdCs2M = accounts[3]
		const uintMpRCZ4z = BigInt("1466")
		const addressXf9Uc3B = accounts[5]
		const addressnYkft7a = accounts[3]
		const uintC6MtgeF = BigInt("1231")
		const addressTn4Gan = accounts[2]
		const uintP2N7QnQ = BigInt("1716")
		const addresshNcJeHY = accounts[1]
		const uintZKFAyAV = BigInt("1394")
		const addresseNKXVd0 = accounts[3]
		const addressbRfc01A = accounts[3]
		const uint256Cbpvpbo = await LIBERAPAYKsUYXjV.balanceOf.call(addressExdCs2M, {from: accounts[3]});
		const boolCyDOB57 = await LIBERAPAYKsUYXjV.approve.call(addressXf9Uc3B, uintMpRCZ4z, {from: accounts[2]});
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressnYkft7a, {from: accounts[1]});
		const uint256uNBcWYu = await LIBERAPAYKsUYXjV.getNowTime.call({from: accounts[3]});
//		const booluyeHYEL = await LIBERAPAYKsUYXjV.transfer.call(addressTn4Gan, uintC6MtgeF, {from: accounts[0]});
//		await LIBERAPAYKsUYXjV.pause.call({from: accounts[4]});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const booleOhxelI = await LIBERAPAYKsUYXjV.distribute.call(addresshNcJeHY, uintP2N7QnQ, {from: accounts[2]});
//		const boolKaKpef9 = await LIBERAPAYKsUYXjV.transfer.call(addresseNKXVd0, uintZKFAyAV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressbRfc01A, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCyDOB57, true)
		assert.equal(uint256Cbpvpbo, BigInt("0"))
		assert.equal(uint256dgccDGD, BigInt("0"))
		assert.equal(uint256uNBcWYu, BigInt("1630229745"))
		await expect(LIBERAPAYKsUYXjV.transfer.call(addressTn4Gan, uintC6MtgeF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
//		await LIBERAPAYNBrLZH3.f.call({from: accounts[2]});

		await expect(LIBERAPAYNBrLZH3.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const uintpoFsPFY = BigInt("250")
		const addressrhDl4Pn = accounts[3]
		const uintm7F1L14 = BigInt("760")
		const addressD6rkvE3 = accounts[1]
		const addressHgky0FL = accounts[4]
		const uint256dqId9Hg = await LIBERAPAYNBrLZH3.totalSupply.call({from: accounts[2]});
//		await LIBERAPAYNBrLZH3.showLockState.call(addressrhDl4Pn, uintpoFsPFY, {from: accounts[4]});
//		const boolWi8P9Lx = await LIBERAPAYNBrLZH3.decreaseAllowance.call(addressD6rkvE3, uintm7F1L14, {from: accounts[4]});
//		const boolodvmNI = await LIBERAPAYNBrLZH3.freezeAccount.call(addressHgky0FL, {from: accounts[1]});

		assert.equal(uint256dqId9Hg, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYNBrLZH3.showLockState.call(addressrhDl4Pn, uintpoFsPFY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const addresswMWXta = accounts[3]
		const uintBRbmuyk = BigInt("1575")
		const addresstkgbYg1 = accounts[1]
		const addresscPhrmRm = accounts[0]
		const uintXzlGsHY = BigInt("1231")
		const addressmUprTqR = accounts[2]
		const uintVDzMpAx = BigInt("895")
		const addresstanIdj9 = accounts[2]
		const addresslnf6TLi = accounts[2]
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addresswMWXta, {from: accounts[1]});
//		const boolsoNF8Lh = await LIBERAPAYKsUYXjV.transferFrom.call(addresscPhrmRm, addresstkgbYg1, uintBRbmuyk, {from: accounts[4]});
//		const booluyeHYEL = await LIBERAPAYKsUYXjV.transfer.call(addressmUprTqR, uintXzlGsHY, {from: accounts[0]});
//		const boolq6KhLQH = await LIBERAPAYKsUYXjV.unlock.call(addresstanIdj9, uintVDzMpAx, {from: "0x0000000000000000000000000000000000000001"});
//		await LIBERAPAYKsUYXjV.whenNotPaused.call({from: accounts[3]});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addresslnf6TLi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.transferFrom.call(addresscPhrmRm, addresstkgbYg1, uintBRbmuyk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const uintbqNx8i = BigInt("1603")
		const uintfF8WmUj = BigInt("518")
		const addressfBah9gn = accounts[2]
		const uintb6jv8U5 = BigInt("250")
		const addressqdR1euq = accounts[4]
//		const boolHQqDSxl = await LIBERAPAYNBrLZH3.lock.call(addressfBah9gn, uintfF8WmUj, uintbqNx8i, {from: accounts[3]});
//		await LIBERAPAYNBrLZH3.showLockState.call(addressqdR1euq, uintb6jv8U5, {from: accounts[4]});

		await expect(LIBERAPAYNBrLZH3.lock.call(addressfBah9gn, uintfF8WmUj, uintbqNx8i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const addressCYrLN4t = accounts[2]
		const uintIFLEX55 = BigInt("1968")
		const addressfPqN6Q8 = accounts[0]
		const uintLKf4hSY = BigInt("250")
		const addressvxWJBqR = accounts[4]
		const addressDEvgxgF = await LIBERAPAYNBrLZH3.upgradeTo.call(addressCYrLN4t, {from: accounts[3]});
//		const boolj2xUN16 = await LIBERAPAYNBrLZH3.distribute.call(addressfPqN6Q8, uintIFLEX55, {from: accounts[4]});
//		await LIBERAPAYNBrLZH3.showLockState.call(addressvxWJBqR, uintLKf4hSY, {from: accounts[4]});

		await expect(LIBERAPAYNBrLZH3.distribute.call(addressfPqN6Q8, uintIFLEX55, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const uinty2w9PC0 = BigInt("250")
		const addresslC6Bct = accounts[4]
		const addressC7T8xLR = accounts[2]
		const uintcDnzi4g = BigInt("779")
		const addressijVz8b3 = accounts[3]
//		await LIBERAPAYNBrLZH3.showLockState.call(addresslC6Bct, uinty2w9PC0, {from: accounts[4]});
//		const addressksBa4UA = await LIBERAPAYNBrLZH3.transferOwnership.call(addressC7T8xLR, {from: accounts[3]});
//		const boolisdkAnD = await LIBERAPAYNBrLZH3.decreaseAllowance.call(addressijVz8b3, uintcDnzi4g, {from: accounts[4]});

		await expect(LIBERAPAYNBrLZH3.showLockState.call(addresslC6Bct, uinty2w9PC0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const uintaO6P4Jp = BigInt("336")
		const addressMuIifWR = accounts[0]
		const uintnWf2BM2 = BigInt("250")
		const addressSUx0zMb = accounts[4]
		const boolPJ1Gj7m = await LIBERAPAYNBrLZH3.distribute.call(addressMuIifWR, uintaO6P4Jp, {from: accounts[3]});
//		await LIBERAPAYNBrLZH3.showLockState.call(addressSUx0zMb, uintnWf2BM2, {from: accounts[4]});

		assert.equal(boolPJ1Gj7m, true)
		await expect(LIBERAPAYNBrLZH3.showLockState.call(addressSUx0zMb, uintnWf2BM2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKsUYXjV = await LIBERAPAY.new({from: accounts[5]});
		const uintAWLtXIG = BigInt("1786")
		const addressHionc1R = accounts[3]
		const uintIN6m7xF = BigInt("1110")
		const uintZ57qtPI = BigInt("991")
		const addressz2EOXMF = accounts[3]
		const uintOrJE8VR = BigInt("1231")
		const addressrS6W9yk = accounts[2]
		const addressZe7mw0y = accounts[2]
		const boolKTQNS8H = await LIBERAPAYKsUYXjV.burn.call(uintAWLtXIG, {from: accounts[5]});
		const uint256dgccDGD = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressHionc1R, {from: accounts[1]});
//		const boolepRyAog = await LIBERAPAYKsUYXjV.lock.call(addressz2EOXMF, uintZ57qtPI, uintIN6m7xF, {from: accounts[0]});
//		const booluyeHYEL = await LIBERAPAYKsUYXjV.transfer.call(addressrS6W9yk, uintOrJE8VR, {from: accounts[0]});
//		const uint256dgKJz8H = await LIBERAPAYKsUYXjV.currentBalanceOf.call(addressZe7mw0y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKTQNS8H, true)
		assert.equal(uint256dgccDGD, BigInt("0"))
		await expect(LIBERAPAYKsUYXjV.lock.call(addressz2EOXMF, uintZ57qtPI, uintIN6m7xF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const addressRiGcfF2 = accounts[1]
		const uintJ2zBZ5z = BigInt("176")
		const addressDjlvX5G = accounts[4]
//		const boolZHhPwg = await LIBERAPAYNBrLZH3.unfreezeAccount.call(addressRiGcfF2, {from: accounts[3]});
//		const bool3Km9KP = await LIBERAPAYNBrLZH3.transfer.call(addressDjlvX5G, uintJ2zBZ5z, {from: accounts[0]});

		await expect(LIBERAPAYNBrLZH3.unfreezeAccount.call(addressRiGcfF2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOPMgTkY = await LIBERAPAY.new({from: accounts[3]});
		const uintx83GAIX = BigInt("790")
		const addressItcWK7Q = accounts[5]
		const uintDcc389P = BigInt("1821")
		const addressbbYAMnD = accounts[1]
		const uintduqPT79 = BigInt("1460")
		const addressxVselB3 = accounts[2]
		const uintGn8DkSj = BigInt("1211")
		const addresswJysAi7 = accounts[4]
//		const boolZ3OieW = await LIBERAPAYOPMgTkY.mint.call(addressItcWK7Q, uintx83GAIX, {from: accounts[3]});
//		const uint256W0V7ljK = await LIBERAPAYOPMgTkY.getNowTime.call({from: accounts[4]});
//		const boolJtI3WF2 = await LIBERAPAYOPMgTkY.increaseAllowance.call(addressbbYAMnD, uintDcc389P, {from: accounts[0]});
//		const boolW1De71z = await LIBERAPAYOPMgTkY.increaseAllowance.call(addressxVselB3, uintduqPT79, {from: accounts[3]});
//		const boolSfpbTXD = await LIBERAPAYOPMgTkY.distribute.call(addresswJysAi7, uintGn8DkSj, {from: accounts[0]});

		await expect(LIBERAPAYOPMgTkY.mint.call(addressItcWK7Q, uintx83GAIX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const addressBdnngAh = accounts[1]
		const uintwh3Blu9 = BigInt("1408")
		const addressF8nu1Gd = "0x0000000000000000000000000000000000000002"
		const addressM0VlTLs = "0x0000000000000000000000000000000000000002"
		const boolWE04oP = await LIBERAPAYNBrLZH3.freezeAccount.call(addressBdnngAh, {from: accounts[3]});
//		const bool5SSiHj = await LIBERAPAYNBrLZH3.transferFrom.call(addressM0VlTLs, addressF8nu1Gd, uintwh3Blu9, {from: accounts[0]});
//		await LIBERAPAYNBrLZH3.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolWE04oP, true)
		await expect(LIBERAPAYNBrLZH3.transferFrom.call(addressM0VlTLs, addressF8nu1Gd, uintwh3Blu9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYNBrLZH3 = await LIBERAPAY.new({from: accounts[3]});
		const uinttMgiQmg = BigInt("250")
		const addressTos3aH = accounts[3]
		const addressIAu1Exf = "0x0000000000000000000000000000000000000001"
		const addressAyE8SBb = accounts[4]
//		await LIBERAPAYNBrLZH3.showLockState.call(addressTos3aH, uinttMgiQmg, {from: accounts[4]});
//		const uint256WytUo4A = await LIBERAPAYNBrLZH3.currentBalanceOf.call(addressIAu1Exf, {from: accounts[1]});
//		await LIBERAPAYNBrLZH3.pause.call({from: accounts[3]});
//		const addresszCk3KJg = await LIBERAPAYNBrLZH3.notFrozen.call(addressAyE8SBb, {from: accounts[4]});

		await expect(LIBERAPAYNBrLZH3.showLockState.call(addressTos3aH, uinttMgiQmg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})