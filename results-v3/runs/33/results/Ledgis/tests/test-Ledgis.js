const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisyWPFEjw = await Ledgis.new({from: accounts[4]});
		const uintle8M3lg = BigInt("1066")
		const addressp2ASbyg = accounts[1]
		const uintnR12dFo = BigInt("1681")
		const uint40gznC = BigInt("1334")
		const addressjYi3I0K = accounts[2]
		const uintzKysyNI = BigInt("396")
		const addresspi6yJfY = accounts[4]
		const boolHWngZFZ = await LedgisyWPFEjw.approve.call(addressp2ASbyg, uintle8M3lg, {from: accounts[4]});
		await LedgisyWPFEjw.renounceOwnership.call({from: accounts[1]});
		const address8NzTL6 = await LedgisyWPFEjw.lock.call(addressjYi3I0K, uint40gznC, uintnR12dFo, {from: accounts[4]});
		const booleq6C9Xv = await LedgisyWPFEjw.transfer.call(addresspi6yJfY, uintzKysyNI, {from: accounts[0]});

		assert.equal(boolHWngZFZ, true)
		await expect(LedgisyWPFEjw.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintz9x4fib = BigInt("1043")
		const addressvnBqS5C = accounts[3]
		const addressTZbsiGO = accounts[3]
		const uintsxU6kZ = BigInt("1729")
		const address8SBZ6C = accounts[5]
		const uintOzWq4XS = BigInt("571")
		const addressx0Fcpe6 = accounts[0]
		const addresszugi2Un = accounts[5]
		const boolP3j3a4z = await LedgissTYKkz8.transferFrom.call(addressTZbsiGO, addressvnBqS5C, uintz9x4fib, {from: accounts[1]});
		const boolSD1fvOW = await LedgissTYKkz8.mint.call(address8SBZ6C, uintsxU6kZ, {from: accounts[5]});
		const boolXAVBgKa = await LedgissTYKkz8.increaseAllowance.call(addressx0Fcpe6, uintOzWq4XS, {from: accounts[4]});
		const addresswzbFXkt = await LedgissTYKkz8.unfreeze.call(addresszugi2Un, {from: accounts[4]});

		await expect(LedgissTYKkz8.transferFrom.call(addressTZbsiGO, addressvnBqS5C, uintz9x4fib, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const addressFCAGDLU = accounts[3]
		const uintr4UaxJc = BigInt("41")
		const addressGp62DWZ = accounts[1]
		const uint256HxI0iFn = await LedgisNA6u6oS.balanceOf.call(addressFCAGDLU, {from: accounts[3]});
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintr4UaxJc, {from: accounts[0]});
		const uint256QORtyfo = await LedgisNA6u6oS.balanceOf.call(addressGp62DWZ, {from: accounts[0]});

		assert.equal(uint2568iZezB, BigInt("1630232002"))
		assert.equal(uint256HxI0iFn, BigInt("0"))
		assert.equal(uint256QORtyfo, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgistRR2Hyo = await Ledgis.new({from: accounts[1]});
		const uintpdyXSIF = BigInt("1789")
		const addressYMB75LR = accounts[2]
		const uintNi74LBw = BigInt("883")
		const addresswnrB3iU = accounts[4]
		const addressKyiw06O = accounts[1]
		const boolWPMeAcN = await LedgistRR2Hyo.decreaseAllowance.call(addressYMB75LR, uintpdyXSIF, {from: accounts[4]});
		await LedgistRR2Hyo.renounceOwnership.call({from: accounts[5]});
		const boolqua4lTk = await LedgistRR2Hyo.transferFrom.call(addressKyiw06O, addresswnrB3iU, uintNi74LBw, {from: accounts[4]});
		await LedgistRR2Hyo.onlyOwner.call({from: accounts[2]});

		await expect(LedgistRR2Hyo.decreaseAllowance.call(addressYMB75LR, uintpdyXSIF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisi57naad = await Ledgis.new({from: accounts[1]});
		const uintp1OK3pj = BigInt("1838")
		const addressGQv53FY = accounts[0]
		const uintjlsEnq = BigInt("1662")
		const addressghaJgff = accounts[4]
		const uintACUH3H = BigInt("1360")
		const addressVqDj03l = accounts[1]
		const addressGBy4jSo = accounts[1]
		const boolzxp1IwT = await Ledgisi57naad.approve.call(addressGQv53FY, uintp1OK3pj, {from: accounts[0]});
		await Ledgisi57naad.lockState.call(addressghaJgff, uintjlsEnq, {from: accounts[1]});
		const boolRuSELQ9 = await Ledgisi57naad.mint.call(addressVqDj03l, uintACUH3H, {from: accounts[3]});
		const uint2561N6hRJ = await Ledgisi57naad.balanceOf.call(addressGBy4jSo, {from: accounts[4]});
		await Ledgisi57naad.unpause.call({from: accounts[3]});

		assert.equal(boolzxp1IwT, true)
		await expect(Ledgisi57naad.lockState.call(addressghaJgff, uintjlsEnq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZ2eeen0 = await Ledgis.new({from: accounts[0]});
		const uintmMsgwDq = BigInt("1844")
		await LedgisZ2eeen0.whenNotPaused.call({from: accounts[3]});
		const uint256mfEUotF = await LedgisZ2eeen0.afterTime.call(uintmMsgwDq, {from: accounts[2]});

		await expect(LedgisZ2eeen0.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisxHdKzBb = await Ledgis.new({from: accounts[0]});
		const addressaQS4Rz = accounts[3]
		const uintyYYJHLh = BigInt("1610")
		const uintUYWDtT = BigInt("1511")
		const addressFvo1IRN = accounts[2]
		const uintqX6MxGh = BigInt("1831")
		const addressZtyaZRC = accounts[5]
		const uint256oLAsKwZ = await LedgisxHdKzBb.lockCount.call(addressaQS4Rz, {from: accounts[0]});
		const boolH7KJrP = await LedgisxHdKzBb.transferWithLockAfter.call(addressFvo1IRN, uintUYWDtT, uintyYYJHLh, {from: accounts[5]});
		await LedgisxHdKzBb.onlyOwner.call({from: accounts[0]});
		const boolqKDGb5f = await LedgisxHdKzBb.approve.call(addressZtyaZRC, uintqX6MxGh, {from: accounts[4]});

		assert.equal(uint256oLAsKwZ, BigInt("0"))
		await expect(LedgisxHdKzBb.transferWithLockAfter.call(addressFvo1IRN, uintUYWDtT, uintyYYJHLh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisnaCcnlC = await Ledgis.new({from: accounts[1]});
		const addressALOZIuP = accounts[2]
		const boolw0BoDLN = await LedgisnaCcnlC.isFrozen.call(addressALOZIuP, {from: accounts[1]});
		await LedgisnaCcnlC.unpause.call({from: accounts[3]});

		assert.equal(boolw0BoDLN, false)
		await expect(LedgisnaCcnlC.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintjkExD1q = BigInt("561")
		const addressO5Pel46 = accounts[0]
		const uintVNIcCTF = BigInt("536")
		const uintpiUspjo = BigInt("629")
		const addressMR8EPnz = accounts[1]
		const addressozEjb9P = accounts[5]
		const uintTh0c4d2 = BigInt("933")
		const uintCLT5xuV = BigInt("701")
		const addresssuGgq04 = accounts[2]
		const boolXAVBgKa = await LedgissTYKkz8.increaseAllowance.call(addressO5Pel46, uintjkExD1q, {from: accounts[4]});
		const addressycNjLpO = await LedgissTYKkz8.lockAfter.call(addressMR8EPnz, uintpiUspjo, uintVNIcCTF, {from: accounts[0]});
		const addresswzbFXkt = await LedgissTYKkz8.unfreeze.call(addressozEjb9P, {from: accounts[4]});
		const boolVJVqbD = await LedgissTYKkz8.transferWithLock.call(addresssuGgq04, uintCLT5xuV, uintTh0c4d2, {from: accounts[4]});

		assert.equal(boolXAVBgKa, true)
		await expect(LedgissTYKkz8.lockAfter.call(addressMR8EPnz, uintpiUspjo, uintVNIcCTF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisZ2eeen0 = await Ledgis.new({from: accounts[0]});
		const uintcYnNaC = BigInt("1755")
		const addresswLe7RXA = accounts[1]
		const addressrxhI1YE = await LedgisZ2eeen0.burn.call(addresswLe7RXA, uintcYnNaC, {from: accounts[0]});
		await LedgisZ2eeen0.whenNotPaused.call({from: accounts[3]});

		await expect(LedgisZ2eeen0.burn.call(addresswLe7RXA, uintcYnNaC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEiZnTQV = await Ledgis.new({from: accounts[1]});
		const addressIb7D1KN = accounts[4]
		const booln2O2Z6O = await LedgisEiZnTQV.isFrozen.call(addressIb7D1KN, {from: accounts[3]});
		const uint256RVuTFvS = await LedgisEiZnTQV.currentTime.call({from: accounts[2]});
		await LedgisEiZnTQV.renounceOwnership.call({from: accounts[0]});

		assert.equal(booln2O2Z6O, false)
		assert.equal(uint256RVuTFvS, BigInt("1630231949"))
		await expect(LedgisEiZnTQV.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uintBqum4xl = BigInt("548")
		const addressHj40OHz = "0x0000000000000000000000000000000000000001"
		const uintmHm7bBV = BigInt("20")
		const addresstsWxjmW = accounts[4]
		const boolP1V89wY = await LedgisNA6u6oS.transfer.call(addressHj40OHz, uintBqum4xl, {from: accounts[5]});
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintmHm7bBV, {from: accounts[0]});
		const uint256jOJMeAS = await LedgisNA6u6oS.balanceOf.call(addresstsWxjmW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisNA6u6oS.transfer.call(addressHj40OHz, uintBqum4xl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHpHGmIW = await Ledgis.new({from: accounts[1]});
		const addressvizM4b = accounts[1]
		const addressXFEmbFx = "0x0000000000000000000000000000000000000001"
		const uintfMhXNEQ = BigInt("403")
		const addressQjAEtgg = accounts[4]
		const uintQ4Qk42k = BigInt("1865")
		const addressOLxg6G = accounts[2]
		const addresshXmX46m = accounts[2]
		const uint256y6cmP3 = await LedgisHpHGmIW.lockCount.call(addressvizM4b, {from: accounts[5]});
		const addressqzgFKQ9 = await LedgisHpHGmIW.freeze.call(addressXFEmbFx, {from: accounts[1]});
		const boolqhTThE = await LedgisHpHGmIW.transfer.call(addressQjAEtgg, uintfMhXNEQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolniTvwX = await LedgisHpHGmIW.transferFrom.call(addresshXmX46m, addressOLxg6G, uintQ4Qk42k, {from: accounts[0]});

		assert.equal(uint256y6cmP3, BigInt("0"))
		await expect(LedgisHpHGmIW.transfer.call(addressQjAEtgg, uintfMhXNEQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintcb9tUYN = BigInt("1132")
		const addressEMwMTEl = accounts[3]
		const uintO4nrcHe = BigInt("1043")
		const addressmy2AVC0 = accounts[3]
		const addressYEyIsu2 = accounts[4]
		const addressjWOK1HQ = await LedgissTYKkz8.unlock.call(addressEMwMTEl, uintcb9tUYN, {from: accounts[1]});
		const boolP3j3a4z = await LedgissTYKkz8.transferFrom.call(addressYEyIsu2, addressmy2AVC0, uintO4nrcHe, {from: accounts[1]});

		await expect(LedgissTYKkz8.unlock.call(addressEMwMTEl, uintcb9tUYN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const addressYfaSTPD = accounts[0]
		const uintE6HXWcJ = BigInt("731")
		const addressHXW8Vm6 = accounts[0]
		const uintXoifVQ3 = BigInt("5")
		const addresswQ0fSTX = await LedgisNA6u6oS.transferOwnership.call(addressYfaSTPD, {from: accounts[0]});
		const boolDf50jSH = await LedgisNA6u6oS.transfer.call(addressHXW8Vm6, uintE6HXWcJ, {from: accounts[0]});
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintXoifVQ3, {from: accounts[0]});

		assert.equal(boolDf50jSH, true)
		assert.equal(uint2568iZezB, BigInt("1630231956"))
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const addressnN2VCf = accounts[3]
		const address0jJlQY = accounts[3]
		const addressdsLLeUD = accounts[3]
		const uint256QORtyfo = await LedgisNA6u6oS.balanceOf.call(addressnN2VCf, {from: accounts[0]});
		const uint256mAEfvuX = await LedgisNA6u6oS.allowance.call(addressdsLLeUD, address0jJlQY, {from: accounts[4]});

		assert.equal(uint256QORtyfo, BigInt("0"))
		assert.equal(uint256mAEfvuX, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uintPhVwVtT = BigInt("866")
		const uintXfYDlXs = BigInt("936")
		const addressYedSa3O = accounts[1]
		const addressgskJmg3 = accounts[3]
		const boolRFISeq = await LedgisNA6u6oS.transferWithLock.call(addressYedSa3O, uintXfYDlXs, uintPhVwVtT, {from: accounts[0]});
		const uint256QORtyfo = await LedgisNA6u6oS.balanceOf.call(addressgskJmg3, {from: accounts[0]});

		assert.equal(boolRFISeq, true)
		assert.equal(uint256QORtyfo, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisMlZDkTv = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintt2FkbY6 = BigInt("1193")
		const uinteMHuhIK = BigInt("1575")
		const addressJIVEecB = accounts[2]
		const uintjBjDnF = BigInt("991")
		const uintDkzTyku = BigInt("264")
		const addressE8EXNuv = accounts[3]
		const addressF6DfzsJ = await LedgisMlZDkTv.lockAfter.call(addressJIVEecB, uinteMHuhIK, uintt2FkbY6, {from: accounts[1]});
		const boolaQRxdS = await LedgisMlZDkTv.transferWithLock.call(addressE8EXNuv, uintDkzTyku, uintjBjDnF, {from: accounts[4]});
		await LedgisMlZDkTv.whenNotPaused.call({from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uintD5GpDyK = BigInt("85")
		const uint5VIQ84 = BigInt("124")
		const addressYbDQa95 = "0x0000000000000000000000000000000000000001"
		const uintx4NOX6I = BigInt("1881")
		const addressISgRB0p = accounts[2]
		const uintbNSbC8F = BigInt("11")
		const boolfbRPaxB = await LedgisNA6u6oS.transferWithLockAfter.call(addressYbDQa95, uint5VIQ84, uintD5GpDyK, {from: accounts[0]});
		const addressLxBhlXU = await LedgisNA6u6oS.unlock.call(addressISgRB0p, uintx4NOX6I, {from: accounts[3]});
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintbNSbC8F, {from: accounts[0]});

		assert.equal(boolfbRPaxB, true)
		await expect(LedgisNA6u6oS.unlock.call(addressISgRB0p, uintx4NOX6I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uintvsL2tLF = BigInt("1543")
		const addressFsFr1mT = accounts[1]
		const addresshOL2uk8 = accounts[3]
		const boolLnXTeeb = await LedgisNA6u6oS.increaseAllowance.call(addressFsFr1mT, uintvsL2tLF, {from: accounts[0]});
		const uint256psqGWkR = await LedgisNA6u6oS.totalSupply.call({from: accounts[4]});
		const uint256QORtyfo = await LedgisNA6u6oS.balanceOf.call(addresshOL2uk8, {from: accounts[0]});

		assert.equal(boolLnXTeeb, true)
		assert.equal(uint256QORtyfo, BigInt("0"))
		assert.equal(uint256psqGWkR, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const addressHjf1Ldu = accounts[0]
		const uintK9kJcty = BigInt("172")
		const addressdLHOF3F = accounts[0]
		const uintRTBcfCa = BigInt("1594")
		const uint256noYQeem = await LedgisNA6u6oS.balanceOf.call(addressHjf1Ldu, {from: "0x0000000000000000000000000000000000000001"});
		const boolw5SzR3J = await LedgisNA6u6oS.mint.call(addressdLHOF3F, uintK9kJcty, {from: accounts[0]});
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintRTBcfCa, {from: accounts[0]});

		assert.equal(boolw5SzR3J, true)
		assert.equal(uint2568iZezB, BigInt("1630233563"))
		assert.equal(uint256noYQeem, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uinteFMae47 = BigInt("0")
		const addressWOhGlo9 = accounts[3]
		const uintVDvwF4H = BigInt("1892")
		const uintKA6QBex = BigInt("536")
		const addressI0uU4VM = accounts[1]
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uinteFMae47, {from: accounts[0]});
		const uint256bhYnUE6 = await LedgisNA6u6oS.balanceOf.call(addressWOhGlo9, {from: accounts[3]});
		const addressBb37MG = await LedgisNA6u6oS.lockAfter.call(addressI0uU4VM, uintKA6QBex, uintVDvwF4H, {from: accounts[0]});
		await LedgisNA6u6oS.whenNotFrozen.call({from: accounts[0]});

		assert.equal(uint2568iZezB, BigInt("1630231960"))
		assert.equal(uint256bhYnUE6, BigInt("0"))
		await expect(LedgisNA6u6oS.lockAfter.call(addressI0uU4VM, uintKA6QBex, uintVDvwF4H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const uintLvS0HUQ = BigInt("20")
		const uint2568iZezB = await LedgisNA6u6oS.afterTime.call(uintLvS0HUQ, {from: accounts[0]});
		await LedgisNA6u6oS.pause.call({from: accounts[0]});

		assert.equal(uint2568iZezB, BigInt("1630231968"))
		await expect(LedgisNA6u6oS.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintYLYjnkG = BigInt("1041")
		const addressxzSM7F4 = accounts[3]
		const addressIhCT823 = accounts[4]
		await LedgissTYKkz8.unpause.call({from: accounts[1]});
		const boolP3j3a4z = await LedgissTYKkz8.transferFrom.call(addressIhCT823, addressxzSM7F4, uintYLYjnkG, {from: accounts[1]});

		await expect(LedgissTYKkz8.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintmKNkV06 = BigInt("1043")
		const addressMb4OWPx = accounts[4]
		const addressbf62QBI = accounts[4]
		await LedgissTYKkz8.renounceOwnership.call({from: accounts[1]});
		const boolP3j3a4z = await LedgissTYKkz8.transferFrom.call(addressbf62QBI, addressMb4OWPx, uintmKNkV06, {from: accounts[1]});

		await expect(LedgissTYKkz8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisNA6u6oS = await Ledgis.new({from: accounts[0]});
		const addresst5oawcu = accounts[3]
		const addressFqk9qvc = accounts[2]
		const addressrYmmhHq = await LedgisNA6u6oS.unfreeze.call(addresst5oawcu, {from: accounts[0]});
		const uint256QORtyfo = await LedgisNA6u6oS.balanceOf.call(addressFqk9qvc, {from: accounts[0]});

		assert.equal(uint256QORtyfo, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgissTYKkz8 = await Ledgis.new({from: accounts[1]});
		const uintgK3kVZt = BigInt("1354")
		const uintYKrljcS = BigInt("1114")
		const addressInimaWZ = accounts[0]
		const address2eSJy1 = accounts[2]
		const uintP7pg9Ir = BigInt("1432")
		const addressxomJFew = accounts[3]
		const addressU6N2iKD = accounts[4]
		const addresskA9WSid = await LedgissTYKkz8.lock.call(addressInimaWZ, uintYKrljcS, uintgK3kVZt, {from: accounts[1]});
		const uint256hfYSlzr = await LedgissTYKkz8.balanceOf.call(address2eSJy1, {from: accounts[1]});
		const boolP3j3a4z = await LedgissTYKkz8.transferFrom.call(addressU6N2iKD, addressxomJFew, uintP7pg9Ir, {from: accounts[1]});

		await expect(LedgissTYKkz8.lock.call(addressInimaWZ, uintYKrljcS, uintgK3kVZt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})