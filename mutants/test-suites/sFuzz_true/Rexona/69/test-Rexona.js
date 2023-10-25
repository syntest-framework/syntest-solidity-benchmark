const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringHq5ZJky = "exM6J0cdMwCbkeSyYba6lEPqTrh3xdbql3URHcbsR3u8zBbL"
		const stringwy4fgR8 = "a6aHbQvoxqlBifJbx9Y2EvEGDBbdQc"
		const uint32rUSl = BigInt("137")
		const RexonaTrw8y9 = await Rexona.new(stringHq5ZJky, stringwy4fgR8, uint32rUSl, {from: accounts[2]});
		const uintFWeinCC = BigInt("779")
		const addressX4VZaal = accounts[0]
		const uintethzpaW = BigInt("1784")
		const addressujZA3M = accounts[3]
		const uintVXkgxcC = BigInt("1230")
		const addressb7Avvyp = accounts[3]
		const uintZBNuLXV = BigInt("1272")
		const addresspRBCBte = accounts[1]
		const uintspBpVIP = BigInt("1170")
		const addressqRjVnzs = "0x0000000000000000000000000000000000000001"
		const boolz0BF5HW = await RexonaTrw8y9.approve.call(addressX4VZaal, uintFWeinCC, {from: accounts[1]});
//		const boolZH7VToP = await RexonaTrw8y9.approveAndCall.call(addressujZA3M, uintethzpaW, {from: accounts[3]});
//		const boolRIoLNAF = await RexonaTrw8y9.approveAndCall.call(addressb7Avvyp, uintVXkgxcC, {from: accounts[3]});
//		const boolX5VuwE = await RexonaTrw8y9.approveAndCall.call(addresspRBCBte, uintZBNuLXV, {from: accounts[1]});
//		const boolsNHjapf = await RexonaTrw8y9.transfer.call(addressqRjVnzs, uintspBpVIP, {from: accounts[1]});

		assert.equal(boolz0BF5HW, true)
		await expect(RexonaTrw8y9.approveAndCall.call(addressujZA3M, uintethzpaW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringpuCekj5 = "RxuDvJsDmb6cck0lXFKHxULu2iHuKYBWEeApeLuhf2vBIEQTXrP7k0fkQDFxkTSdXTTW6E8M1YjSxEJMZbpmm1wjtOB"
		const stringdS8CP2W = "ek3CS2b4qHGtYmtMxD5IHmwSgya5cInFlB34b57sPLsLxfdI7SWF30Gw9OGkqh3vDQ2qNyEPrhWg433iH"
		const uintNogkwdu = BigInt("1884")
		const Rexona9YlrgF = await Rexona.new(stringpuCekj5, stringdS8CP2W, uintNogkwdu, {from: accounts[5]});
		const uintvpCXTzI = BigInt("1530")
		const addressG6yJ1B = accounts[0]
		const uintlZa4RWd = BigInt("1182")
		const addresswfEuZlc = accounts[0]
		const uintt2OIeV = BigInt("1375")
		const addressC4FWKMX = accounts[0]
		const boolrb9MY2m = await Rexona9YlrgF.approve.call(addressG6yJ1B, uintvpCXTzI, {from: accounts[4]});
//		const boolQgHLJ6E = await Rexona9YlrgF.transfer.call(addresswfEuZlc, uintlZa4RWd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrssaCr = await Rexona9YlrgF.approve.call(addressC4FWKMX, uintt2OIeV, {from: accounts[0]});

		assert.equal(boolrb9MY2m, true)
		await expect(Rexona9YlrgF.transfer.call(addresswfEuZlc, uintlZa4RWd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhu5wMbj = "oNFeYYLF5710c1nVulvbKSTxO9OViMFVQgFs"
		const stringZc1FVWl = "YyU67H7OP9bMdW0YzbSG7ogstFdjRSWtTOQzz7pkEAjSLcjCGdjmjkPkuTLeIIcUCE6nV0W"
		const uintd0x3op = BigInt("1440")
		const Rexona4tIjmt = await Rexona.new(stringhu5wMbj, stringZc1FVWl, uintd0x3op, {from: accounts[3]});
		const uintLAhvbFH = BigInt("610")
		const addressZwntuvF = "0x0000000000000000000000000000000000000001"
		const uintPPQpYvr = BigInt("1704")
		const addressOhunVP = accounts[0]
		const addressBg5kLB = accounts[4]
		const uintx3cUEYR = BigInt("622")
		const addressQXJMXl = "0x0000000000000000000000000000000000000001"
		const addressPWYe3LF = accounts[4]
		const uintkoHc49P = BigInt("1040")
		const addressXDdmrCa = accounts[3]
		const addresswcuIt0P = accounts[0]
		const uintsS3fPGF = BigInt("670")
		const addressO2BGewd = accounts[1]
		const boolwHCPBS2 = await Rexona4tIjmt.approve.call(addressZwntuvF, uintLAhvbFH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbjgD4zG = await Rexona4tIjmt.transferFrom.call(addressBg5kLB, addressOhunVP, uintPPQpYvr, {from: accounts[3]});
//		const boolcF2rFKX = await Rexona4tIjmt.transferFrom.call(addressPWYe3LF, addressQXJMXl, uintx3cUEYR, {from: accounts[5]});
//		const boolmjYlIS = await Rexona4tIjmt.transferFrom.call(addresswcuIt0P, addressXDdmrCa, uintkoHc49P, {from: accounts[1]});
//		const boolbZ7Ur06 = await Rexona4tIjmt.transfer.call(addressO2BGewd, uintsS3fPGF, {from: accounts[0]});

		assert.equal(boolwHCPBS2, true)
		await expect(Rexona4tIjmt.transferFrom.call(addressBg5kLB, addressOhunVP, uintPPQpYvr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhUGY45v = "IORf8bDfciA5j"
		const stringCjLQbyi = "STvcfcQhfyQavikVG6MJJFI7BMGVALohsKdotOgxq25GX6l"
		const uintnkYoCiH = BigInt("505")
		const RexonaGQed4Vb = await Rexona.new(stringhUGY45v, stringCjLQbyi, uintnkYoCiH, {from: accounts[0]});
		const addressVd7dLJU = "0x0000000000000000000000000000000000000001"
		const uintkzXjIM = BigInt("775")
		const addressOOjQcO = accounts[4]
		const addressHjvx7gZ = accounts[4]
		const addressUhxKgUr = accounts[0]
		const uintKXOSxEX = BigInt("1767")
		const addressHmGpEL6 = accounts[1]
		const uintijXNhED = BigInt("104")
		const addressBHllkxn = accounts[1]
//		const booli01L7mc = await RexonaGQed4Vb.transferownership.call(addressVd7dLJU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJgpR8Rx = await RexonaGQed4Vb.transferFrom.call(addressHjvx7gZ, addressOOjQcO, uintkzXjIM, {from: accounts[4]});
//		const boolb3cOrsq = await RexonaGQed4Vb.transferownership.call(addressUhxKgUr, {from: accounts[4]});
//		const booletoefwF = await RexonaGQed4Vb.approve.call(addressHmGpEL6, uintKXOSxEX, {from: accounts[0]});
//		const boolwXYB3k8 = await RexonaGQed4Vb.approveAndCall.call(addressBHllkxn, uintijXNhED, {from: accounts[3]});

		await expect(RexonaGQed4Vb.transferownership.call(addressVd7dLJU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringz4jFZzb = "ynD7G6V"
		const stringLPXyhoK = "f7UvT2jlNMnR9mqXmhMBbC304XvgJ8GgfXVziXxj"
		const uintwCmdp7E = BigInt("893")
		const RexonapbNLAVI = await Rexona.new(stringz4jFZzb, stringLPXyhoK, uintwCmdp7E, {from: accounts[4]});
		const uintos8EFi = BigInt("236")
		const addressDLMH6Xb = accounts[4]
		const uintHPU1iu4 = BigInt("578")
		const addressar33Rh4 = accounts[0]
//		const booloR37j3 = await RexonapbNLAVI.transfer.call(addressDLMH6Xb, uintos8EFi, {from: accounts[3]});
//		const boolb8kvV0U = await RexonapbNLAVI.approveAndCall.call(addressar33Rh4, uintHPU1iu4, {from: accounts[2]});

		await expect(RexonapbNLAVI.transfer.call(addressDLMH6Xb, uintos8EFi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringz4jFZzb = "ynD7G6V"
		const stringLPXyhoK = "f7UvT2jlNMnR9mqXmhMBbC304XvgJ8GgfXVziXxj"
		const uintYspFUAN = BigInt("893")
		const RexonapbNLAVI = await Rexona.new(stringz4jFZzb, stringLPXyhoK, uintYspFUAN, {from: accounts[4]});
		const uint3eyhgd = BigInt("1267")
		const addressrmRveBo = accounts[2]
		const uintDti8m5L = BigInt("882")
		const addresssPGKYo = accounts[4]
		const uintmzM0xb2 = BigInt("870")
		const addressInZXZOB = "0x0000000000000000000000000000000000000001"
		const boollfFUfF1 = await RexonapbNLAVI.approveAndCall.call(addressrmRveBo, uint3eyhgd, {from: accounts[4]});
//		const booluYAgAAO = await RexonapbNLAVI.approveAndCall.call(addresssPGKYo, uintDti8m5L, {from: accounts[2]});
//		const boolvMVWfwD = await RexonapbNLAVI.transfer.call(addressInZXZOB, uintmzM0xb2, {from: accounts[3]});

		assert.equal(boollfFUfF1, true)
		await expect(RexonapbNLAVI.approveAndCall.call(addresssPGKYo, uintDti8m5L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringul28IQr = "4lUl8NPJT3UIPe7naJJOx3fEma4KE3QZsQ6mAVDnjk"
		const stringJimEWBG = "7FvrKnQBB7tRSu"
		const uintNX3csrk = BigInt("1889")
		const RexonaikzFAmG = await Rexona.new(stringul28IQr, stringJimEWBG, uintNX3csrk, {from: accounts[1]});
		const addressinIE3Y = accounts[5]
		const uintG3ZMa4x = BigInt("1852")
		const addressymv4IPW = accounts[1]
		const addressWSqUScj = accounts[0]
		const addresstZigwcR = accounts[2]
		const boolDieBJRY = await RexonaikzFAmG.transferownership.call(addressinIE3Y, {from: accounts[1]});
//		const boolrrMql7 = await RexonaikzFAmG.transferFrom.call(addressWSqUScj, addressymv4IPW, uintG3ZMa4x, {from: accounts[5]});
//		const boolfPhLR7 = await RexonaikzFAmG.transferownership.call(addresstZigwcR, {from: accounts[0]});

		assert.equal(boolDieBJRY, true)
		await expect(RexonaikzFAmG.transferFrom.call(addressWSqUScj, addressymv4IPW, uintG3ZMa4x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringthSC285 = "vSeuE5OXLH4WpHOn7zBqEK3fWIBTuFmH6r80ePxRrb6rXUHysKY7iFWAVfgYUkE5NRypyk6rPNx"
		const stringKnUUOoz = "Lv4tZCplI5FmQKPjbVdHE9S7bqp5CfGzsExRynZB7zWbwnyK69ybanzvHlqsKoe1yKr1Ije"
		const uintJHXuKYt = BigInt("970")
		const RexonaknTan7o = await Rexona.new(stringthSC285, stringKnUUOoz, uintJHXuKYt, {from: "0x0000000000000000000000000000000000000001"});
		const uint06NnsK = BigInt("1735")
		const addressO3zXPVm = "0x0000000000000000000000000000000000000001"
		const addressEP5JlLq = accounts[2]
		const uintDhWEta0 = BigInt("536")
		const addresszPvKmPY = accounts[3]
		const uint5ymEPi = BigInt("1058")
		const addresskXX0jMQ = accounts[1]
		const uintB8KkEUd = BigInt("867")
		const addressMsJj8r = accounts[1]
		const uintIRsnVbD = BigInt("1705")
		const addressvPCl8c = accounts[0]
		const uintTBTVhHL = BigInt("132")
		const addressCqhuEa1 = accounts[1]
		const boolm4lkJ3o = await RexonaknTan7o.transferFrom.call(addressEP5JlLq, addressO3zXPVm, uint06NnsK, {from: accounts[2]});
		const boolKytzwZz = await RexonaknTan7o.transfer.call(addresszPvKmPY, uintDhWEta0, {from: accounts[2]});
		const boolPxDk0C3 = await RexonaknTan7o.approveAndCall.call(addresskXX0jMQ, uint5ymEPi, {from: accounts[0]});
		const boolXos2PQ = await RexonaknTan7o.approveAndCall.call(addressMsJj8r, uintB8KkEUd, {from: accounts[1]});
		const boolpcWWHU5 = await RexonaknTan7o.approveAndCall.call(addressvPCl8c, uintIRsnVbD, {from: accounts[3]});
		const booldTiv9Oz = await RexonaknTan7o.approve.call(addressCqhuEa1, uintTBTVhHL, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringz4jFZzb = "ynD7G6V"
		const stringLPXyhoK = "f7UvT2jlNMnR9mqXmhMBbC304XvgJ8GgfXVziXxj"
		const uintHIA89Pw = BigInt("893")
		const RexonapbNLAVI = await Rexona.new(stringz4jFZzb, stringLPXyhoK, uintHIA89Pw, {from: accounts[4]});
		const uintsZMSyRE = BigInt("0")
		const addressFwi4D9Q = accounts[0]
		const addressZYqIvw9 = accounts[2]
		const addressWMmeOyQ = accounts[5]
		const booltX9NZ01 = await RexonapbNLAVI.transferFrom.call(addressZYqIvw9, addressFwi4D9Q, uintsZMSyRE, {from: accounts[1]});
		const boolVM3lgzx = await RexonapbNLAVI.transferownership.call(addressWMmeOyQ, {from: accounts[4]});

		assert.equal(boolVM3lgzx, true)
		assert.equal(booltX9NZ01, true)
	});

	it('test for Rexona', async () => {
		const stringz4jFZzb = "ynD7G6V"
		const stringLPXyhoK = "f7UvT2jlNMnR9mqXmhMBbC304XvgJ8GgfXVziXxj"
		const uintuH4Rc2C = BigInt("893")
		const RexonapbNLAVI = await Rexona.new(stringz4jFZzb, stringLPXyhoK, uintuH4Rc2C, {from: accounts[4]});
		const uintlwdDwRh = BigInt("0")
		const addressy189lej = "0x0000000000000000000000000000000000000002"
		const bools6h7UL = await RexonapbNLAVI.approveAndCall.call(addressy189lej, uintlwdDwRh, {from: accounts[4]});

		assert.equal(bools6h7UL, true)
	});
})