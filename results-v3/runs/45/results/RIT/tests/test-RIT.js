const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITZAbdgfu = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoN0iJpC = BigInt("1473")
		const addresslrviy9y = "0x0000000000000000000000000000000000000001"
		const boolnHLVnTk = await RITZAbdgfu.increaseAllowance.call(addresslrviy9y, uintoN0iJpC, {from: accounts[0]});
		const stringKf80Cgx = await RITZAbdgfu.symbol.call({from: accounts[2]});
	});

	it('test for RIT', async () => {
		const RIThAnCkP1 = await RIT.new({from: accounts[0]});
		const addresssjdQfig = accounts[2]
		const uint8IlVZSJ = await RIThAnCkP1.decimals.call({from: accounts[0]});
		const uint256JDMMGD1 = await RIThAnCkP1.balanceOf.call(addresssjdQfig, {from: accounts[3]});
		const stringoUItljp = await RIThAnCkP1.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringoUItljp, "RIT 2.0")
		assert.equal(uint256JDMMGD1, BigInt("0"))
		assert.equal(uint8IlVZSJ, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RIToCzJby5 = await RIT.new({from: accounts[5]});
		const uintpkviIWL = BigInt("1443")
		const addressIYevHaO = "0x0000000000000000000000000000000000000001"
		const uint4JcO8T = BigInt("1275")
		const addressvVzweN = accounts[4]
		const addressbnYiTh7 = accounts[0]
		const uint8RQk1XA3 = await RIToCzJby5.decimals.call({from: accounts[4]});
		const booleqxdPWU = await RIToCzJby5.decreaseAllowance.call(addressIYevHaO, uintpkviIWL, {from: accounts[2]});
		const boolUVQDWvE = await RIToCzJby5.transferFrom.call(addressbnYiTh7, addressvVzweN, uint4JcO8T, {from: accounts[1]});
		const stringB7Zzzzn = await RIToCzJby5.symbol.call({from: accounts[4]});
		const uint256hUiEMTk = await RIToCzJby5.totalSupply.call({from: accounts[2]});

		assert.equal(uint8RQk1XA3, BigInt("18"))
		await expect(RIToCzJby5.decreaseAllowance.call(addressIYevHaO, uintpkviIWL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZPy4Dsd = await RIT.new({from: accounts[4]});
		const uintUknPCwD = BigInt("1771")
		const addressrCv9B9L = "0x0000000000000000000000000000000000000001"
		const uintHupMVSf = BigInt("1462")
		const addressDqnWhm8 = accounts[4]
		const uintHjny9rP = BigInt("897")
		const addressXBMGRn = accounts[0]
		const uintpN4VopF = BigInt("378")
		const addressVsS7eNK = accounts[5]
		const boolIambzj = await RITZPy4Dsd.approve.call(addressrCv9B9L, uintUknPCwD, {from: accounts[2]});
		const boolQEkErrw = await RITZPy4Dsd.decreaseAllowance.call(addressDqnWhm8, uintHupMVSf, {from: accounts[4]});
		const bool5u04YM = await RITZPy4Dsd.transfer.call(addressXBMGRn, uintHjny9rP, {from: accounts[2]});
		const boolzRxhWCG = await RITZPy4Dsd.transfer.call(addressVsS7eNK, uintpN4VopF, {from: accounts[1]});
		const uint256N3lQ9Q4 = await RITZPy4Dsd.totalSupply.call({from: accounts[5]});

		assert.equal(boolIambzj, true)
		await expect(RITZPy4Dsd.decreaseAllowance.call(addressDqnWhm8, uintHupMVSf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITfExunmS = await RIT.new({from: accounts[1]});
		const addressGQVWj00 = accounts[1]
		const addressdP0rsFH = accounts[2]
		const addressAPAEby = accounts[1]
		const uintqUlCYst = BigInt("476")
		const addressZIbyQWR = accounts[2]
		const address5myxc9 = accounts[4]
		const uinteboTc3 = BigInt("335")
		const uint256E2totmH = await RITfExunmS.allowance.call(addressdP0rsFH, addressGQVWj00, {from: accounts[0]});
		const uint256AEhfvrG = await RITfExunmS.balanceOf.call(addressAPAEby, {from: accounts[2]});
		const boolYMtMQz = await RITfExunmS.transferFrom.call(address5myxc9, addressZIbyQWR, uintqUlCYst, {from: accounts[2]});
		const uint256zrnkpvc = await RITfExunmS._burn.call(uinteboTc3, {from: accounts[4]});
		const string2GmZYY = await RITfExunmS.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AEhfvrG, BigInt("0"))
		assert.equal(uint256E2totmH, BigInt("0"))
		await expect(RITfExunmS.transferFrom.call(address5myxc9, addressZIbyQWR, uintqUlCYst, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITUTuALc = await RIT.new({from: accounts[3]});
		const uintOrTixgs = BigInt("1181")
		const addressg2Iai8 = accounts[2]
		const uint7lEkHg = BigInt("1375")
		const addressaWfzQOT = accounts[5]
		const boolK1vSVK8 = await RITUTuALc.transfer.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]});
		const uint256MVQs0o1 = await RITUTuALc.totalSupply.call({from: accounts[3]});
		const uint8l2blwEp = await RITUTuALc.decimals.call({from: accounts[0]});
		const boolxa9qGCv = await RITUTuALc.decreaseAllowance.call(addressaWfzQOT, uint7lEkHg, {from: accounts[4]});

		await expect(RITUTuALc.transfer.call(addressg2Iai8, uintOrTixgs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RIT1JgTGL = await RIT.new({from: accounts[4]});
		const uinth7zYN2X = BigInt("2031")
		const addressJPkazdX = accounts[1]
		const uinty9BbAZZ = BigInt("2037")
		const addressf1a3OP5 = accounts[4]
		const boolqgBmcyY = await RIT1JgTGL.increaseAllowance.call(addressJPkazdX, uinth7zYN2X, {from: accounts[0]});
		const boolchzeLlo = await RIT1JgTGL.increaseAllowance.call(addressf1a3OP5, uinty9BbAZZ, {from: accounts[4]});

		assert.equal(boolchzeLlo, true)
		assert.equal(boolqgBmcyY, true)
	});

	it('test for RIT', async () => {
		const RITdcwn02i = await RIT.new({from: accounts[3]});
		const uintV9NUlfF = BigInt("1832")
		const uintwd1nRxM = BigInt("84")
		const addressU9Tquv2 = accounts[2]
		const uintKFuJRc = BigInt("1375")
		const uintIwL0LMR = BigInt("2025")
		const addressodcvgl0 = accounts[1]
		const addressyLl1lCj = accounts[0]
		const uint256bHivAxB = await RITdcwn02i._burn.call(uintV9NUlfF, {from: accounts[4]});
		const boolYHq6CTu = await RITdcwn02i.approve.call(addressU9Tquv2, uintwd1nRxM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xBZe5eC = await RITdcwn02i._burn.call(uintKFuJRc, {from: accounts[1]});
		const boolRKisrSb = await RITdcwn02i.increaseAllowance.call(addressodcvgl0, uintIwL0LMR, {from: accounts[1]});
		const uint256nSMIN0 = await RITdcwn02i.balanceOf.call(addressyLl1lCj, {from: accounts[4]});

		await expect(RITdcwn02i._burn.call(uintV9NUlfF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RIT1JgTGL = await RIT.new({from: accounts[4]});
		const uinti3Qft5N = BigInt("1765")
		const addressi0aHtEL = accounts[5]
		const uintg0b30c3 = BigInt("1898")
		const addressBqg3CX6 = accounts[3]
		const uintTIZOwO3 = BigInt("457")
		const addressAzP2Hmf = accounts[1]
		const boolISnsvCU = await RIT1JgTGL.approve.call(addressi0aHtEL, uinti3Qft5N, {from: accounts[3]});
		const stringWVnMKts = await RIT1JgTGL.name.call({from: accounts[2]});
		const boolgispUh = await RIT1JgTGL.decreaseAllowance.call(addressBqg3CX6, uintg0b30c3, {from: accounts[5]});
		const booltF7SisX = await RIT1JgTGL.increaseAllowance.call(addressAzP2Hmf, uintTIZOwO3, {from: accounts[4]});

		assert.equal(boolISnsvCU, true)
		assert.equal(stringWVnMKts, "Real Estate Investment Token")
		await expect(RIT1JgTGL.decreaseAllowance.call(addressBqg3CX6, uintg0b30c3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITbOO7pr4 = await RIT.new({from: accounts[2]});
		const uintMIFwamK = BigInt("508")
		const addressRoRno59 = accounts[0]
		const addressNo6er8l = accounts[3]
		const uint256TCafylL = await RITbOO7pr4.totalSupply.call({from: accounts[1]});
		const boolG38uciT = await RITbOO7pr4.transfer.call(addressRoRno59, uintMIFwamK, {from: accounts[3]});
		const uint256NmTneTU = await RITbOO7pr4.balanceOf.call(addressNo6er8l, {from: accounts[5]});

		assert.equal(uint256TCafylL, BigInt("500000000000000000000000000"))
		await expect(RITbOO7pr4.transfer.call(addressRoRno59, uintMIFwamK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})