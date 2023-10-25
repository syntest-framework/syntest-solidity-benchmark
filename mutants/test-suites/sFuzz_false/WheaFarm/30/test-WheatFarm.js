const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringtZFoAoN = "qa8KxXXQ1m93LPjyvrbj7KgwKT5HxokGdaQqHjy87zDzU5cUNo"
		const stringDham029 = "SYNUMRibArZC2prT9RGn3sBVV9of4X5nTWfRkDbcTAKyVcl7KkRWG"
		const uintfifpeMZ = BigInt("435")
		const WheatFarmHFiQYMp = await WheatFarm.new(stringtZFoAoN, stringDham029, uintfifpeMZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintXW5eWfd = BigInt("1973")
		const addressVQzXrTY = accounts[3]
		const addressBFnoKz = accounts[2]
		const uintFcCt20J = BigInt("1763")
		const addressH09l5Bn = accounts[2]
		const addressUiL3o0f = accounts[2]
		const uintyeSgFi = BigInt("486")
		const addressQXHL190 = accounts[3]
		const addressROBhJLC = "0x0000000000000000000000000000000000000001"
		const uintbhqv0LP = BigInt("871")
		const addressqnRuctm = accounts[3]
		const stringt0aSSXl = await WheatFarmHFiQYMp.name.call({from: accounts[3]});
		const boolZ87SQjy = await WheatFarmHFiQYMp.transferFrom.call(addressBFnoKz, addressVQzXrTY, uintXW5eWfd, {from: accounts[1]});
		const boolWz9usuS = await WheatFarmHFiQYMp.transferFrom.call(addressUiL3o0f, addressH09l5Bn, uintFcCt20J, {from: accounts[3]});
		const boolKRC7IfI = await WheatFarmHFiQYMp.transferFrom.call(addressROBhJLC, addressQXHL190, uintyeSgFi, {from: accounts[1]});
		const boolaFyAGSF = await WheatFarmHFiQYMp.approve.call(addressqnRuctm, uintbhqv0LP, {from: accounts[5]});
	});

	it('test for WheatFarm', async () => {
		const strings42pM6s = "zbWWAfVfJEQsxcjUA5Wl68ad59uQMVskMVcVI7ExYkNTOW0yFzxzESW78EkLdhrscmRbd"
		const stringVtCmenb = "goIWEYCVVRkizAVh5gxiu2RX4DWeELXfbdnjxgTNn4wogTmoe"
		const uintOAVMaep = BigInt("136")
		const WheatFarmpbIcclJ = await WheatFarm.new(strings42pM6s, stringVtCmenb, uintOAVMaep, {from: accounts[4]});
		const addressqcVpgNO = "0x0000000000000000000000000000000000000001"
		const uintjpNt9qE = BigInt("1368")
		const addressCaVfjfK = accounts[3]
		const addressFdFfx1p = "0x0000000000000000000000000000000000000001"
		const uintGu1cEMt = BigInt("584")
		const addressI3wQh23 = accounts[4]
		const stringOTRDcFq = await WheatFarmpbIcclJ.symbol.call({from: accounts[1]});
		const uintx4fwxBZ = await WheatFarmpbIcclJ.balanceOf.call(addressqcVpgNO, {from: accounts[0]});
//		const boolcJhu4Jw = await WheatFarmpbIcclJ.transferFrom.call(addressFdFfx1p, addressCaVfjfK, uintjpNt9qE, {from: "0x0000000000000000000000000000000000000001"});
//		const bool7mV2ug = await WheatFarmpbIcclJ.increaseAllowance.call(addressI3wQh23, uintGu1cEMt, {from: accounts[2]});

		assert.equal(stringOTRDcFq, "goIWEYCVVRkizAVh5gxiu2RX4DWeELXfbdnjxgTNn4wogTmoe")
		assert.equal(uintx4fwxBZ, BigInt("0"))
		await expect(WheatFarmpbIcclJ.transferFrom.call(addressFdFfx1p, addressCaVfjfK, uintjpNt9qE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringqV3yf5 = "fNS8YbM2ghKXhcq1msmNlBYM4TtvmrEtAzLPQudATJCfGRLlIqElYJcNf4uZi7HiX3TUZQMy0x5bK15pcSmQQLLErIyvXl4"
		const stringWdx86qf = "WOq"
		const uintJ9oUn17 = BigInt("937")
		const WheatFarmYQkDt4n = await WheatFarm.new(stringqV3yf5, stringWdx86qf, uintJ9oUn17, {from: accounts[0]});
		const uintfKd3hkN = BigInt("1972")
		const addressgj0Xs7i = accounts[0]
		const uintxWMetE1 = BigInt("1337")
		const addressHdIIUf4 = accounts[0]
		const stringAPoutQ2 = await WheatFarmYQkDt4n.symbol.call({from: accounts[1]});
		const boolCVMKtFq = await WheatFarmYQkDt4n.approve.call(addressgj0Xs7i, uintfKd3hkN, {from: accounts[0]});
		const boolHe5xL9 = await WheatFarmYQkDt4n.approve.call(addressHdIIUf4, uintxWMetE1, {from: accounts[1]});

		assert.equal(boolCVMKtFq, true)
		assert.equal(boolHe5xL9, true)
		assert.equal(stringAPoutQ2, "WOq")
	});

	it('test for WheatFarm', async () => {
		const stringjY2CQ9w = "IpCb3"
		const stringqZdJ2ag = "53Mooa77QRF9btxI244mXlz3YtsZmmraXX97S7Uh3ofvrkMfdZ8tvuIIwiX6W4cyEjt"
		const uintNqQWL2x = BigInt("1638")
		const WheatFarmDAjt8nF = await WheatFarm.new(stringjY2CQ9w, stringqZdJ2ag, uintNqQWL2x, {from: accounts[0]});
		const uintyQSni2e = BigInt("940")
		const addressTkGRDJT = accounts[1]
		const uintCyccFeD = BigInt("380")
		const addressm0mSr62 = accounts[1]
		const addressfYhP69c = accounts[5]
		const uintyvzASlF = BigInt("253")
		const addresshdgOaRr = accounts[2]
		const uintviTwzIM = BigInt("1585")
		const addressBrk3Qap = accounts[0]
		const string1IE0qv = await WheatFarmDAjt8nF.name.call({from: accounts[1]});
		const uint8m3Ax04s = await WheatFarmDAjt8nF.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolitduon = await WheatFarmDAjt8nF.increaseAllowance.call(addressTkGRDJT, uintyQSni2e, {from: "0x0000000000000000000000000000000000000001"});
//		const boolV4L1mAo = await WheatFarmDAjt8nF.transferFrom.call(addressfYhP69c, addressm0mSr62, uintCyccFeD, {from: accounts[1]});
//		const boolozEAZQG = await WheatFarmDAjt8nF.approve.call(addresshdgOaRr, uintyvzASlF, {from: accounts[3]});
//		const booloYXRNrM = await WheatFarmDAjt8nF.approve.call(addressBrk3Qap, uintviTwzIM, {from: accounts[2]});

		assert.equal(string1IE0qv, "IpCb3")
		assert.equal(uint8m3Ax04s, BigInt("18"))
		await expect(WheatFarmDAjt8nF.increaseAllowance.call(addressTkGRDJT, uintyQSni2e, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringknE6Kg = "aJCbhL0SYTJbOjCsvoBRvbfdXjurpWdSoTugBER"
		const stringMEP0SPr = "frxhUkLDVsL4z1B7oL8ugzxhCGVpLGYUMgoU3oXSqshQwPojZCN7Jsp1l0klWjbIgGx8qbbkPrqaTzJh2OHfU"
		const uintzAokX3i = BigInt("1535")
		const WheatFarmlpJ1hP = await WheatFarm.new(stringknE6Kg, stringMEP0SPr, uintzAokX3i, {from: accounts[1]});
		const addressEstVxx4 = accounts[0]
		const uintJ86NSN = BigInt("196")
		const addressXcVbdld = accounts[3]
		const uintokQ6Aye = BigInt("852")
		const addressOUYHj1P = accounts[0]
		const uint8RyR6nHx = await WheatFarmlpJ1hP.decimals.call({from: accounts[4]});
		const stringw8tMuKn = await WheatFarmlpJ1hP.name.call({from: accounts[3]});
		const uintDTAm5a2 = await WheatFarmlpJ1hP.balanceOf.call(addressEstVxx4, {from: accounts[4]});
		const uint8j501p6L = await WheatFarmlpJ1hP.decimals.call({from: accounts[0]});
		const boolLMN3A8U = await WheatFarmlpJ1hP.transfer.call(addressXcVbdld, uintJ86NSN, {from: accounts[1]});
//		const boolOsQ8ovA = await WheatFarmlpJ1hP.decreaseAllowance.call(addressOUYHj1P, uintokQ6Aye, {from: accounts[4]});

		assert.equal(boolLMN3A8U, true)
		assert.equal(stringw8tMuKn, "aJCbhL0SYTJbOjCsvoBRvbfdXjurpWdSoTugBER")
		assert.equal(uint8RyR6nHx, BigInt("18"))
		assert.equal(uint8j501p6L, BigInt("18"))
		assert.equal(uintDTAm5a2, BigInt("0"))
		await expect(WheatFarmlpJ1hP.decreaseAllowance.call(addressOUYHj1P, uintokQ6Aye, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringseiBoKv = "YDXuZ1CsrzD3GD6hgNydDtCf8MbUA1taWCGGmKSBePVfvHayRe8s2XmcVqv30gHUtsu"
		const stringEUIsgw = "1B4jwlVbcDgCG2IvInPaJD8273uGdE6s5m73DACqXjqXtUisvjcvD4Wa"
		const uintkd6qEww = BigInt("5")
		const WheatFarmUuzXfA = await WheatFarm.new(stringseiBoKv, stringEUIsgw, uintkd6qEww, {from: accounts[0]});
		const uintkFG0jHA = BigInt("88")
		const addressrdoHkt3 = accounts[2]
		const boollyb6P7x = await WheatFarmUuzXfA.approveAndCall.call(addressrdoHkt3, uintkFG0jHA, {from: accounts[0]});
		const stringSuryQKY = await WheatFarmUuzXfA.name.call({from: accounts[0]});
		const uint8l9wjPA = await WheatFarmUuzXfA.decimals.call({from: accounts[2]});

		assert.equal(boollyb6P7x, true)
		assert.equal(stringSuryQKY, "YDXuZ1CsrzD3GD6hgNydDtCf8MbUA1taWCGGmKSBePVfvHayRe8s2XmcVqv30gHUtsu")
		assert.equal(uint8l9wjPA, BigInt("18"))
	});

	it('test for WheatFarm', async () => {
		const stringseiBoKv = "YDXuZ1CsrzD3GD6hgNydDtCf8MbUA1taWCGGmKSBePVfvHayRe8s2XmcVqv30gHUtsu"
		const stringEUIsgw = "1B4jwlVbcDgCG2IvInPaJD8273uGdE6s5m73DACqXjqXtUisvjcvD4Wa"
		const uintbwnbBvB = BigInt("5")
		const WheatFarmUuzXfA = await WheatFarm.new(stringseiBoKv, stringEUIsgw, uintbwnbBvB, {from: accounts[0]});
		const addressywtnM3j = accounts[2]
		const uintYbwSyKH = BigInt("88")
		const addressyWLVUnh = accounts[3]
//		const boolBaYW1IE = await WheatFarmUuzXfA.transferownership.call(addressywtnM3j, {from: accounts[3]});
//		const boollyb6P7x = await WheatFarmUuzXfA.approveAndCall.call(addressyWLVUnh, uintYbwSyKH, {from: accounts[0]});

		await expect(WheatFarmUuzXfA.transferownership.call(addressywtnM3j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringVeC2u5g = "2SkUU2D0yRQnqFmt"
		const stringcxYMG8M = "YNUf8KpEYwHFdsrzfzwbuW57mbuyDC7exeB9vgCa95a8H9UwJVd8A4j8T"
		const uintr7xmwmu = BigInt("83")
		const WheatFarmvjj9dG8 = await WheatFarm.new(stringVeC2u5g, stringcxYMG8M, uintr7xmwmu, {from: accounts[5]});
		const uintwO0FhkS = BigInt("497")
		const addressztcbg6J = accounts[3]
		const uintHZATBeH = BigInt("1859")
		const addressGY8x2v2 = accounts[0]
		const addressZaONtoR = accounts[3]
		const addressK06wxkX = accounts[4]
		const uintqQCkx8e = BigInt("0")
		const addressZmCJyEv = accounts[3]
		const boolKgoisQ3 = await WheatFarmvjj9dG8.approve.call(addressztcbg6J, uintwO0FhkS, {from: accounts[4]});
		const boole6Ahntb = await WheatFarmvjj9dG8.approve.call(addressGY8x2v2, uintHZATBeH, {from: accounts[2]});
		const uintVndMkZ = await WheatFarmvjj9dG8.allowance.call(addressK06wxkX, addressZaONtoR, {from: accounts[5]});
		const boolAYPtqjz = await WheatFarmvjj9dG8.transfer.call(addressZmCJyEv, uintqQCkx8e, {from: accounts[3]});

		assert.equal(boolAYPtqjz, true)
		assert.equal(boolKgoisQ3, true)
		assert.equal(boole6Ahntb, true)
		assert.equal(uintVndMkZ, BigInt("0"))
	});

	it('test for WheatFarm', async () => {
		const stringseiBoKv = "YDXuZ1CsrzD3GD6hgNydDtCf8MbUA1taWCGGmKSBePVfvHayRe8s2XmcVqv30gHUtsu"
		const stringEUIsgw = "1B4jwlVbcDgCG2IvInPaJD8273uGdE6s5m73DACqXjqXtUisvjcvD4Wa"
		const uintV7yYMwm = BigInt("5")
		const WheatFarmUuzXfA = await WheatFarm.new(stringseiBoKv, stringEUIsgw, uintV7yYMwm, {from: accounts[0]});
		const uintQfvJBMf = BigInt("0")
		const addressLq8R7kk = accounts[6]
		const uintsGryq23 = BigInt("32")
		const addressc3WoAuB = accounts[3]
		const boollyb6P7x = await WheatFarmUuzXfA.approveAndCall.call(addressLq8R7kk, uintQfvJBMf, {from: accounts[0]});
//		const boollSQXSS5 = await WheatFarmUuzXfA.transfer.call(addressc3WoAuB, uintsGryq23, {from: accounts[3]});

		assert.equal(boollyb6P7x, true)
		await expect(WheatFarmUuzXfA.transfer.call(addressc3WoAuB, uintsGryq23, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})