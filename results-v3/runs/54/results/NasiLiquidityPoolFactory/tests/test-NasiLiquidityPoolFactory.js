const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressJ4QECxG = accounts[1]
		const addressOp0wlO = "0x0000000000000000000000000000000000000001"
		const uintB7fu4u = BigInt("519")
		const uintXk9FnSU = BigInt("474")
		const NasiLiquidityPoolFactorydXt0Dv = await NasiLiquidityPoolFactory.new(addressJ4QECxG, addressOp0wlO, uintB7fu4u, uintXk9FnSU, {from: accounts[1]});
		const addressqWTFNDW = accounts[0]
		await NasiLiquidityPoolFactorydXt0Dv.onlyMinter.call({from: accounts[1]});
		await NasiLiquidityPoolFactorydXt0Dv.whenNotPaused.call({from: accounts[4]});
		await NasiLiquidityPoolFactorydXt0Dv.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressHIA63Ls = await NasiLiquidityPoolFactorydXt0Dv.addPauser.call(addressqWTFNDW, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringknUvbxZ = "iUBFKK1GBJyFwLlsJHIaC5LEDPMf7Hg69U30mS7oV7tTmRnjeuef2lSzYmf2HGUHLybbeQhobF7o3Em"
		const stringZhK7so = "4f8xvsc"
		const uintK6vWJ4D = BigInt("71")
		const NasiLiquidityPoolFactoryHELKIt = await NasiLiquidityPoolFactory.new(stringknUvbxZ, stringZhK7so, uintK6vWJ4D, {from: accounts[4]});
		const uintjyiTgl = BigInt("107")
		const address72TjeR = accounts[2]
		const uinttcgnyjE = BigInt("1845")
		const uintwHMNkD8 = BigInt("1496")
		const addressvda9Bw1 = accounts[0]
		const uintoG5cBbJ = BigInt("937")
		const addressA8cYMCz = "0x0000000000000000000000000000000000000001"
		const boolh7oAk54 = await NasiLiquidityPoolFactoryHELKIt.approve.call(address72TjeR, uintjyiTgl, {from: accounts[5]});
		const uint256TwTNcrx = await NasiLiquidityPoolFactoryHELKIt.getBonusMultiplier.call(uintwHMNkD8, uinttcgnyjE, {from: accounts[4]});
		const stringgaSnToS = await NasiLiquidityPoolFactoryHELKIt.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressGARAy7Q = await NasiLiquidityPoolFactoryHELKIt.transferOwnership.call(addressvda9Bw1, {from: "0x0000000000000000000000000000000000000001"});
		const bool3eUUbg = await NasiLiquidityPoolFactoryHELKIt.transfer.call(addressA8cYMCz, uintoG5cBbJ, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressiltSlMU = accounts[3]
		const addressgoZNdds = accounts[2]
		const uintrfWmmdR = BigInt("52")
		const uintjAu88ii = BigInt("1701")
		const NasiLiquidityPoolFactoryac24pMo = await NasiLiquidityPoolFactory.new(addressiltSlMU, addressgoZNdds, uintrfWmmdR, uintjAu88ii, {from: accounts[0]});
		const uintQUmhi42 = BigInt("1372")
		const uintrfz1bYe = BigInt("1284")
		const uintPM52PDA = BigInt("326")
		const addresshszpf0D = accounts[1]
		const addresssZ3o9mv = accounts[0]
		const addressSfKVl8t = accounts[3]
		const byteVWU4Wh3 = "0x0b1d06070d03121f0c04000d0c0c07060e05191f0f040e1e06091f152017080a"
		const bytehHJABhG = "0x091b1d0e140d150d0711060b201d0411120d1619080c1a12051810041f1d1c10"
		const uintqRelV5I = BigInt("81")
		const uintrDHdfvH = BigInt("1270")
		const uintRlwkDUD = BigInt("1190")
		const addressjkGNIl4 = accounts[1]
		const uintK1yVcJ = BigInt("230")
		const addresssIbJILl = "0x0000000000000000000000000000000000000001"
		const addressbH62mOR = "0x0000000000000000000000000000000000000001"
		const addressUMInWy = "0x0000000000000000000000000000000000000001"
		const uint256y04wMi2 = await NasiLiquidityPoolFactoryac24pMo.getBonusMultiplier.call(uintrfz1bYe, uintQUmhi42, {from: accounts[4]});
		const boolSq95pyZ = await NasiLiquidityPoolFactoryac24pMo.mint.call(addresshszpf0D, uintPM52PDA, {from: accounts[5]});
		const uint256BEuTxq = await NasiLiquidityPoolFactoryac24pMo.allowance.call(addressSfKVl8t, addresssZ3o9mv, {from: accounts[3]});
		const 
YvCnQV = await NasiLiquidityPoolFactoryac24pMo.delegateBySig.call(addressjkGNIl4, uintRlwkDUD, uintrDHdfvH, uintqRelV5I, bytehHJABhG, byteVWU4Wh3, {from: accounts[0]});
		const boolV4FYkjy = await NasiLiquidityPoolFactoryac24pMo.mint.call(addresssIbJILl, uintK1yVcJ, {from: accounts[0]});
		const addressVBCMKgL = await NasiLiquidityPoolFactoryac24pMo._delegate.call(addressUMInWy, addressbH62mOR, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHVR6BKl = "dGg1vnX6PQARgX4noX8CenlbgtuAaLrYHVEqb4IpdsJjVd4r48"
		const stringQie60I = "ynU"
		const uintxK1SzYc = BigInt("177")
		const NasiLiquidityPoolFactoryiIZjZ2t = await NasiLiquidityPoolFactory.new(stringHVR6BKl, stringQie60I, uintxK1SzYc, {from: accounts[1]});
		const addresspDiF8NS = accounts[5]
		const uintbomvhwS = BigInt("1687")
		const uintYvdUkjg = BigInt("1078")
		const addresspyQPYjU = accounts[1]
		const uintvG8oNyZ = BigInt("390")
		const addressdw05CA = accounts[4]
		const uintBhl0Az = BigInt("402")
		const addresss03puyz = await NasiLiquidityPoolFactoryiIZjZ2t.delegates.call(addresspDiF8NS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g59PVu = await NasiLiquidityPoolFactoryiIZjZ2t.getBonusMultiplier.call(uintYvdUkjg, uintbomvhwS, {from: accounts[2]});
		const addressZnlTFZi = await NasiLiquidityPoolFactoryiIZjZ2t.dev.call(addresspyQPYjU, {from: accounts[2]});
		const boolDuMBfq = await NasiLiquidityPoolFactoryiIZjZ2t.transfer.call(addressdw05CA, uintvG8oNyZ, {from: accounts[4]});
		const uint256B1qhlU4 = await NasiLiquidityPoolFactoryiIZjZ2t.updatePool.call(uintBhl0Az, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringdyIDjJs = "NFWTKi0LdsbGcOsYEgVBo8YNFTPNk7pHrJvfJXurW4x5ti1CHqp3uyeDp3u4LXAE6E7TbDuLdjncgFe"
		const stringon794UP = "Ylr7bThPzW1TICbycuV67qtNpJ1PI8qhqRT7d7tBKX256bCAnk8kRrw6GmIGwtHprA"
		const uintzfS4Mqu = BigInt("39")
		const NasiLiquidityPoolFactoryaVjs0DY = await NasiLiquidityPoolFactory.new(stringdyIDjJs, stringon794UP, uintzfS4Mqu, {from: accounts[1]});
		const uintZmi8aJ = BigInt("885")
		const addressqZKW4i9 = accounts[1]
		const addressHNc0iWJ = accounts[3]
		const uintKzeRSr = BigInt("134")
		const uintqfzHMXz = BigInt("498")
		const addressffekU0n = accounts[4]
		const boolXXHGY64 = await NasiLiquidityPoolFactoryaVjs0DY.mint.call(addressqZKW4i9, uintZmi8aJ, {from: accounts[4]});
		await NasiLiquidityPoolFactoryaVjs0DY.pause.call({from: accounts[3]});
		const uint256IFPrCe7 = await NasiLiquidityPoolFactoryaVjs0DY.pendingNasi.call(uintKzeRSr, addressHNc0iWJ, {from: accounts[4]});
		const bool5wM5fA = await NasiLiquidityPoolFactoryaVjs0DY.decreaseAllowance.call(addressffekU0n, uintqfzHMXz, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsBNLIXQ = "ajGIi9POKr9VloGxuVlCI0SVGlFN2WL64sy35Cf5xtetrmGJmXtlbTr0"
		const stringKD6QQL = "oxCCmVcsOHkHthwTGIWkJrHinzADLFgKnXYRp"
		const uintIBkNubI = BigInt("15")
		const NasiLiquidityPoolFactoryU1z7rYu = await NasiLiquidityPoolFactory.new(stringsBNLIXQ, stringKD6QQL, uintIBkNubI, {from: accounts[1]});
		const uintQL4SLuX = BigInt("452")
		const addressZxKcLj = accounts[1]
		const uintfBnEgMr = BigInt("1954")
		const addresspV418mR = accounts[0]
		const uintenQ0vc = BigInt("1143")
		const addresseSwVMei = accounts[0]
		const uintpIGZMOq = BigInt("447")
		const uintCtZuSK = BigInt("1088")
		const uint256OWWo3aY = await NasiLiquidityPoolFactoryU1z7rYu.getPriorVotes.call(addressZxKcLj, uintQL4SLuX, {from: accounts[4]});
		const boolfGKt9Y = await NasiLiquidityPoolFactoryU1z7rYu.mint.call(addresspV418mR, uintfBnEgMr, {from: "0x0000000000000000000000000000000000000001"});
		const boolNt3lNMr = await NasiLiquidityPoolFactoryU1z7rYu.mint.call(addresseSwVMei, uintenQ0vc, {from: accounts[5]});
		const uint256ZsPMwY = await NasiLiquidityPoolFactoryU1z7rYu.withdraw.call(uintCtZuSK, uintpIGZMOq, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryU1z7rYu.onlyOwner.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresstVNAfC3 = accounts[5]
		const addressFi2vyRn = accounts[3]
		const uintahxNKLR = BigInt("385")
		const uintdbDDg4F = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addresstVNAfC3, addressFi2vyRn, uintahxNKLR, uintdbDDg4F, {from: accounts[1]});
		const uintUVn9hcs = BigInt("1105")
		const uintAoOTtYa = BigInt("1416")
		const addresskdDc1Ty = accounts[3]
		const addressPSna6d3 = accounts[4]
		const uint256xc14qb8 = await NasiLiquidityPoolFactoryGRdHbog.leaveStaking.call(uintUVn9hcs, {from: accounts[1]});
		const boolCZRR5cC = await NasiLiquidityPoolFactoryGRdHbog.approve.call(addresskdDc1Ty, uintAoOTtYa, {from: accounts[3]});
		const uint256gkUmFQ = await NasiLiquidityPoolFactoryGRdHbog.getCurrentVotes.call(addressPSna6d3, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrUyeHM8 = "pCSO6IoQZrYSFSNapM4R24ylN4C61nuseLqQlArePf6lHpaELx4u65QjfYiqWy5MSUSBYb5TDpHigpAsFaIL1Xy8AwrP"
		const strings7obdf = "Yqmf36O3OTkpLIBx"
		const uintRogFjpC = BigInt("75")
		const NasiLiquidityPoolFactorygju1tuN = await NasiLiquidityPoolFactory.new(stringrUyeHM8, strings7obdf, uintRogFjpC, {from: accounts[2]});
		const addressj3Dm8T9 = accounts[5]
		const addresspX4i7yC = accounts[0]
		const addressGhTfu6o = accounts[3]
		const uint256ZmcAJ4Q = await NasiLiquidityPoolFactorygju1tuN.allowance.call(addresspX4i7yC, addressj3Dm8T9, {from: "0x0000000000000000000000000000000000000001"});
		const addressHwuLnW7 = await NasiLiquidityPoolFactorygju1tuN.addMinter.call(addressGhTfu6o, {from: accounts[1]});
		await NasiLiquidityPoolFactorygju1tuN.renounceMinter.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressyvaDkdN = accounts[5]
		const addressHW4JSwB = accounts[3]
		const uintAxzDElb = BigInt("385")
		const uintXtwfQV = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressyvaDkdN, addressHW4JSwB, uintAxzDElb, uintXtwfQV, {from: accounts[1]});
		const boolJIW2AT = true
		const uintilAEPRL = BigInt("1325")
		const uint3RrUem = BigInt("1869")
		const uintFbsiCCa = BigInt("1416")
		const addressfAWCgrb = accounts[3]
		const uint256wraqv4l = await NasiLiquidityPoolFactoryGRdHbog.setAllocationPoint.call(uint3RrUem, uintilAEPRL, boolJIW2AT, {from: accounts[4]});
		const boolCZRR5cC = await NasiLiquidityPoolFactoryGRdHbog.approve.call(addressfAWCgrb, uintFbsiCCa, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmBjki53 = "6MkOkipHslGAogmrabliyYmFvlAQ"
		const stringEQpd5kw = "3SrX8zEPhEpDAVV346QVZLD659p2TriGuE73PHdjrK3O1IaYtMndQ72TC4eRQ"
		const uintUCuo4Qr = BigInt("126")
		const NasiLiquidityPoolFactorynWUeycI = await NasiLiquidityPoolFactory.new(stringmBjki53, stringEQpd5kw, uintUCuo4Qr, {from: accounts[0]});
		const uintVvCjrtD = BigInt("46")
		const addressR6MJJ7 = accounts[4]
		const uint256fCe4LMJ = await NasiLiquidityPoolFactorynWUeycI.leaveStaking.call(uintVvCjrtD, {from: accounts[2]});
		const boolwGl42dr = await NasiLiquidityPoolFactorynWUeycI.paused.call({from: accounts[0]});
		const addresswILHxgz = await NasiLiquidityPoolFactorynWUeycI.delegates.call(addressR6MJJ7, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresstTzt7SA = accounts[5]
		const addressw5HfGg6 = accounts[3]
		const uintSzDZO53 = BigInt("385")
		const uintJTpbPFS = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addresstTzt7SA, addressw5HfGg6, uintSzDZO53, uintJTpbPFS, {from: accounts[1]});
		const booltKpmDrk = false
		const uintMaWxwI2 = BigInt("532")
		const uintcNQGvf = BigInt("176")
		const uintPJ7pZQ = BigInt("1010")
		const addressgTm9mON = accounts[5]
		const uint256utbBmOC = await NasiLiquidityPoolFactoryGRdHbog.setAllocationPoint.call(uintcNQGvf, uintMaWxwI2, booltKpmDrk, {from: accounts[1]});
		const boolCZRR5cC = await NasiLiquidityPoolFactoryGRdHbog.approve.call(addressgTm9mON, uintPJ7pZQ, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresskujNe5h = accounts[5]
		const address6imktd = accounts[3]
		const uintnpqhz76 = BigInt("385")
		const uintfwJUc6z = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addresskujNe5h, address6imktd, uintnpqhz76, uintfwJUc6z, {from: accounts[1]});
		const uintX6sY2XE = BigInt("950")
		const uintRhTSIdf = BigInt("571")
		const addressQA1YLeW = "0x0000000000000000000000000000000000000001"
		const uint256d6fOSi = await NasiLiquidityPoolFactoryGRdHbog.migrate.call(uintX6sY2XE, {from: accounts[0]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
		const boolErIrTuh = await NasiLiquidityPoolFactoryGRdHbog.decreaseAllowance.call(addressQA1YLeW, uintRhTSIdf, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressilbD7eL = accounts[5]
		const addressDJYLZxE = accounts[3]
		const uintPiX5L0J = BigInt("385")
		const uintUe6w0zW = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressilbD7eL, addressDJYLZxE, uintPiX5L0J, uintUe6w0zW, {from: accounts[1]});
		const uintsDegSST = BigInt("1522")
		const uintg9VhzHK = BigInt("944")
		const uint256tNjvcYN = await NasiLiquidityPoolFactoryGRdHbog.withdraw.call(uintg9VhzHK, uintsDegSST, {from: accounts[2]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYAspfBo = "LKxCf4O52KTN2HLleTYXFn7WjDtqQVf9wiwK4EQ4E8LCCnKFgbTMEHX42Jc1FH2vL4T4SmC"
		const stringryaOyXf = "V5C2hHzFn6CA4R133NrviS6G0F5IIr2h7zKiGqSk9dgHfqRmXoSvg4u"
		const uintqIg1c4 = BigInt("31")
		const NasiLiquidityPoolFactoryQyzh3ji = await NasiLiquidityPoolFactory.new(stringYAspfBo, stringryaOyXf, uintqIg1c4, {from: accounts[2]});
		const uinttrTy8FE = BigInt("725")
		const uintOqmZO0y = BigInt("2015")
		const addressrZLF8e = accounts[4]
		const addressfOXmJg9 = accounts[2]
		const uintHxR4Tg5 = BigInt("1252")
		const uint256ff1aaeB = await NasiLiquidityPoolFactoryQyzh3ji.migrate.call(uinttrTy8FE, {from: accounts[3]});
		const uint8q6W0ooT = await NasiLiquidityPoolFactoryQyzh3ji.decimals.call({from: accounts[4]});
		const uint8dQwcZHl = await NasiLiquidityPoolFactoryQyzh3ji.decimals.call({from: accounts[3]});
		const boolsDydMFY = await NasiLiquidityPoolFactoryQyzh3ji.decreaseAllowance.call(addressrZLF8e, uintOqmZO0y, {from: accounts[2]});
		const uint256e43oSoY = await NasiLiquidityPoolFactoryQyzh3ji.pendingNasi.call(uintHxR4Tg5, addressfOXmJg9, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresssBecwNF = accounts[5]
		const addressDN37iW = accounts[3]
		const uintBJr0Gru = BigInt("385")
		const uintmHUZwLr = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addresssBecwNF, addressDN37iW, uintBJr0Gru, uintmHUZwLr, {from: accounts[1]});
		const addressUKPx9LE = accounts[3]
		const uintg6Hd847 = BigInt("1774")
		const uint256RpuPFAV = await NasiLiquidityPoolFactoryGRdHbog.pendingNasi.call(uintg6Hd847, addressUKPx9LE, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryGRdHbog.renounceOwnership.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDTvwDbb = "OV9V09A5JqEj7oAJaWRk2uc4mXLHxXalp281"
		const stringINZDfQT = "Syr3qkUtH5UxglfKkQiOw1CfMXtH3PTe2VVEKCp8W2yflXC8aHu9WH23JH4RqgOanWtVq7dycpXXoKmfxeXT9i7KUJztn4kTB"
		const uintNnVHwYR = BigInt("57")
		const NasiLiquidityPoolFactoryaCvujEm = await NasiLiquidityPoolFactory.new(stringDTvwDbb, stringINZDfQT, uintNnVHwYR, {from: accounts[5]});
		const addressu1R6Sy6 = accounts[1]
		await NasiLiquidityPoolFactoryaCvujEm.onlyOwner.call({from: accounts[4]});
		const stringjPVJrNY = await NasiLiquidityPoolFactoryaCvujEm.symbol.call({from: accounts[3]});
		const addresscwuXpmw = await NasiLiquidityPoolFactoryaCvujEm.addPauser.call(addressu1R6Sy6, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqvRCTCm = accounts[5]
		const addressuczpbfQ = accounts[3]
		const uintStw8SDr = BigInt("385")
		const uintRBDkFBr = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressqvRCTCm, addressuczpbfQ, uintStw8SDr, uintRBDkFBr, {from: accounts[1]});
		const addresslnZAfXu = accounts[4]
		const addressdBoBa4f = await NasiLiquidityPoolFactoryGRdHbog.dev.call(addresslnZAfXu, {from: "0x0000000000000000000000000000000000000001"});
		const uint8bkDq5QT = await NasiLiquidityPoolFactoryGRdHbog.decimals.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKGnzrW = accounts[5]
		const addressVjGyem = accounts[5]
		const uintcWTqzq = BigInt("251")
		const uintY6f6BN = BigInt("1054")
		const NasiLiquidityPoolFactorywOzTGqu = await NasiLiquidityPoolFactory.new(addressKGnzrW, addressVjGyem, uintcWTqzq, uintY6f6BN, {from: "0x0000000000000000000000000000000000000001"});
		const uintBzsOM1Q = BigInt("686")
		const uintqeGZ7Re = BigInt("1606")
		const uint256GHmTUH = await NasiLiquidityPoolFactorywOzTGqu.migrate.call(uintBzsOM1Q, {from: accounts[4]});
		await NasiLiquidityPoolFactorywOzTGqu.onlyPauser.call({from: accounts[3]});
		const uint256juvOluZ = await NasiLiquidityPoolFactorywOzTGqu.burn.call(uintqeGZ7Re, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressoy9m0y = accounts[5]
		const addressgec17N5 = accounts[3]
		const uintn6nyVcN = BigInt("385")
		const uintnqZtT2n = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressoy9m0y, addressgec17N5, uintn6nyVcN, uintnqZtT2n, {from: accounts[1]});
		const uintALO6RtE = BigInt("702")
		const addressfJt31x = accounts[2]
		const addressovOf8o = await NasiLiquidityPoolFactoryGRdHbog.owner.call({from: accounts[1]});
		const boolB4BLe8U = await NasiLiquidityPoolFactoryGRdHbog.increaseAllowance.call(addressfJt31x, uintALO6RtE, {from: accounts[4]});
		const boolrz2UVa0 = await NasiLiquidityPoolFactoryGRdHbog.paused.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringT1e13LK = "QciEYaFgS9HIKuRKPfz5OtjHWjx6dSDUnV1gxb4gHWcnxH7UIuCeXfYdngieqNgYEYmPLVsV0"
		const stringVkYJAx = "T3TGV5nESxAGOiCQURgwAUtzO2"
		const uintZzgxjlE = BigInt("50")
		const NasiLiquidityPoolFactorys8rVxBT = await NasiLiquidityPoolFactory.new(stringT1e13LK, stringVkYJAx, uintZzgxjlE, {from: accounts[4]});
		const addressvcfxQB1 = accounts[3]
		const addressc5QP55M = "0x0000000000000000000000000000000000000001"
		const boolOkyJt1 = true
		const uintfIpAlKo = BigInt("1447")
		const uint1tyGU4 = BigInt("553")
		const addressEdho5pY = await NasiLiquidityPoolFactorys8rVxBT.addMinter.call(addressvcfxQB1, {from: accounts[4]});
		const addressL5KiFIK = await NasiLiquidityPoolFactorys8rVxBT.owner.call({from: accounts[1]});
		const addresss06U3fu = await NasiLiquidityPoolFactorys8rVxBT.delegates.call(addressc5QP55M, {from: accounts[4]});
		const uint256MVVkrBc = await NasiLiquidityPoolFactorys8rVxBT.setAllocationPoint.call(uint1tyGU4, uintfIpAlKo, boolOkyJt1, {from: accounts[0]});
		await NasiLiquidityPoolFactorys8rVxBT.onlyMinter.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringCPROv6E = "SIx4qreMzIJribvSl7uEDQFQJyRkgjR9fSUe1ddkBDyhLCg5lxJfxfoIi6vEsrPWI7v2ISl5Sl3StoQ8978R64lmp2LTdCkf"
		const stringl4in2Fb = "YRNl7Y3LTOM3euDnhKBILLgO4edzJqb1SfMuFucY28SQz7ZTg30jjKPVoIuy"
		const uintt9A3K95 = BigInt("235")
		const NasiLiquidityPoolFactory3c4TLT = await NasiLiquidityPoolFactory.new(stringCPROv6E, stringl4in2Fb, uintt9A3K95, {from: accounts[4]});
		const uintdal9v5R = BigInt("690")
		const addressAZQhZwP = accounts[0]
		const addressEYbbK9c = accounts[4]
		const uintPu28OAA = BigInt("1575")
		const addressGfnpSLZ = "0x0000000000000000000000000000000000000001"
		const addresst3Q0Uet = accounts[0]
		const boolx1cnkCl = await NasiLiquidityPoolFactory3c4TLT.transferFrom.call(addressEYbbK9c, addressAZQhZwP, uintdal9v5R, {from: accounts[1]});
		const boolEkkhSf1 = await NasiLiquidityPoolFactory3c4TLT.transfer.call(addressGfnpSLZ, uintPu28OAA, {from: accounts[3]});
		const addressiursOWr = await NasiLiquidityPoolFactory3c4TLT.addPauser.call(addresst3Q0Uet, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressP9qwSLT = accounts[5]
		const addressdQRcwK1 = accounts[3]
		const uintkgJHK0 = BigInt("385")
		const uintBKzhTp5 = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressP9qwSLT, addressdQRcwK1, uintkgJHK0, uintBKzhTp5, {from: accounts[1]});
		const uintoKc384 = BigInt("1893")
		const uintPahcyDY = BigInt("1397")
		const uint256ew4OWf = await NasiLiquidityPoolFactoryGRdHbog.getBonusMultiplier.call(uintPahcyDY, uintoKc384, {from: accounts[4]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
		const uint256YwbVsJA = await NasiLiquidityPoolFactoryGRdHbog.totalSupply.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressCPcoM9 = accounts[5]
		const addresswYRVsHr = accounts[3]
		const uintUuanS1b = BigInt("385")
		const uinte2M9MP = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addressCPcoM9, addresswYRVsHr, uintUuanS1b, uinte2M9MP, {from: accounts[1]});
		const uintTEsDyU = BigInt("615")
		const uintmnI9Nsv = BigInt("1416")
		const addressUCqZ9nh = accounts[4]
		const uintSoWC3AT = BigInt("1455")
		const addressZfZCnU1 = accounts[3]
		const uint256XIax3EB = await NasiLiquidityPoolFactoryGRdHbog.emergencyWithdraw.call(uintTEsDyU, {from: "0x0000000000000000000000000000000000000001"});
		const boolft23R7Q = await NasiLiquidityPoolFactoryGRdHbog.isOwner.call({from: accounts[2]});
		const boolCZRR5cC = await NasiLiquidityPoolFactoryGRdHbog.approve.call(addressUCqZ9nh, uintmnI9Nsv, {from: accounts[3]});
		const boolekWusdm = await NasiLiquidityPoolFactoryGRdHbog.decreaseAllowance.call(addressZfZCnU1, uintSoWC3AT, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresscBPR4FI = accounts[5]
		const addresshBvPkF = accounts[3]
		const uintfc5sx22 = BigInt("385")
		const uinteh1z2Q = BigInt("204")
		const NasiLiquidityPoolFactoryGRdHbog = await NasiLiquidityPoolFactory.new(addresscBPR4FI, addresshBvPkF, uintfc5sx22, uinteh1z2Q, {from: accounts[1]});
		const uintDNsvfk4 = BigInt("1893")
		const uintNO7jQCr = BigInt("1397")
		const uintd34czPH = BigInt("995")
		const uintnvwZasS = BigInt("1369")
		const uint256ew4OWf = await NasiLiquidityPoolFactoryGRdHbog.getBonusMultiplier.call(uintNO7jQCr, uintDNsvfk4, {from: accounts[4]});
		const uint256RZMe77k = await NasiLiquidityPoolFactoryGRdHbog.deposit.call(uintnvwZasS, uintd34czPH, {from: accounts[1]});
		await NasiLiquidityPoolFactoryGRdHbog.renounceMinter.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressjGffpVO = accounts[5]
		const addressyD0mnyy = accounts[1]
		const uintxcMdPl = BigInt("475")
		const uints6bW391 = BigInt("1853")
		const NasiLiquidityPoolFactoryFldfaYX = await NasiLiquidityPoolFactory.new(addressjGffpVO, addressyD0mnyy, uintxcMdPl, uints6bW391, {from: accounts[4]});
		const uintc4vHM8H = BigInt("1610")
		const addressGbPMXTZ = accounts[1]
		const byteFYgqS7p = "0x1e191e0b16011b0609070b0b1b0610070b1a1c0c1b16051c04110a1f021c1d19"
		const bytewnctHi5 = "0x1b13200d061b1f0116111e0f0816001e02021d0e0d1c0a0a021b1412200d010d"
		const uintvK3nKBl = BigInt("77")
		const uintIim1Mqf = BigInt("1536")
		const uintFgN5jJ = BigInt("590")
		const addressbbU8Hh4 = accounts[3]
		await NasiLiquidityPoolFactoryFldfaYX.massUpdatePools.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryFldfaYX.renounceMinter.call({from: accounts[3]});
		const boolacsoBCK = await NasiLiquidityPoolFactoryFldfaYX.decreaseAllowance.call(addressGbPMXTZ, uintc4vHM8H, {from: accounts[3]});
		const 
syLD6GE = await NasiLiquidityPoolFactoryFldfaYX.delegateBySig.call(addressbbU8Hh4, uintFgN5jJ, uintIim1Mqf, uintvK3nKBl, bytewnctHi5, byteFYgqS7p, {from: accounts[0]});
	});
})