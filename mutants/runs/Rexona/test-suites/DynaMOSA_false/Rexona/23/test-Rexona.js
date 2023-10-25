const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringnP59Gpm = "LGrlmrtTUXlpHp48WNTP8WRtBO1VOsaiOJ0DMQGdlW7T"
		const stringtyf3FF3 = "unVGrZxE4ufbzSiLgea0zBMleCeOsfjuFOoAIaY9G5c7wa0YWbl4X132sixQIfXpQx7mqCWbRmU5nJRXfNznb5ESa"
		const uintdLa2Ar = BigInt("301")
		const RexonacsME8H = await Rexona.new(stringnP59Gpm, stringtyf3FF3, uintdLa2Ar, {from: accounts[3]});
		const uintcg4RiAq = BigInt("1215")
		const addressj794sde = accounts[2]
		const addressGSCA7VC = "0x0000000000000000000000000000000000000001"
		const uintgpHW5Pm = BigInt("55")
		const addressUdBVKb = accounts[1]
		const addressNmvqIR4 = accounts[0]
		const uintWUtHwd3 = BigInt("119")
		const addressqLxLCio = accounts[5]
		const addressFZDcJ5I = accounts[3]
		const boolYamF0YJ = await RexonacsME8H.transfer.call(addressj794sde, uintcg4RiAq, {from: accounts[3]});
		const boole5JsWKi = await RexonacsME8H.transferownership.call(addressGSCA7VC, {from: accounts[2]});
		const boolY2wQ2ll = await RexonacsME8H.transferFrom.call(addressNmvqIR4, addressUdBVKb, uintgpHW5Pm, {from: accounts[3]});
		const boolCsHdLhN = await RexonacsME8H.transfer.call(addressqLxLCio, uintWUtHwd3, {from: accounts[1]});
		const booluBP72t0 = await RexonacsME8H.transferownership.call(addressFZDcJ5I, {from: accounts[2]});

		assert.equal(boolYamF0YJ, true)
		await expect(RexonacsME8H.transferownership.call(addressGSCA7VC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOM05uIm = "qPmK8f5pm5ydOWIUOSszHLvHHPR"
		const stringatqbRLH = "WAM"
		const uintDKyivIF = BigInt("1230")
		const Rexonaavzt2Dm = await Rexona.new(stringOM05uIm, stringatqbRLH, uintDKyivIF, {from: accounts[2]});
		const addressiHW1Xq = accounts[1]
		const uintQO3Mf1 = BigInt("354")
		const addresstzPdmNH = accounts[1]
		const uintj2GVLMH = BigInt("450")
		const addressv4wOf35 = accounts[5]
		const addresswbiMqMO = "0x0000000000000000000000000000000000000001"
		const uintIIPpEu = BigInt("398")
		const addressNDyvxom = accounts[3]
		const uintwCRb3Z9 = BigInt("51")
		const addressogVpCbB = accounts[0]
		const addressvUmRZ6s = accounts[0]
		const boolDPk7oCZ = await Rexonaavzt2Dm.transferownership.call(addressiHW1Xq, {from: accounts[2]});
		const boolhj5bGVG = await Rexonaavzt2Dm.transfer.call(addresstzPdmNH, uintQO3Mf1, {from: accounts[0]});
		const boolJFbMq8f = await Rexonaavzt2Dm.transferFrom.call(addresswbiMqMO, addressv4wOf35, uintj2GVLMH, {from: accounts[3]});
		const boolRmvHVFn = await Rexonaavzt2Dm.approve.call(addressNDyvxom, uintIIPpEu, {from: accounts[4]});
		const boold6vWiLx = await Rexonaavzt2Dm.transferFrom.call(addressvUmRZ6s, addressogVpCbB, uintwCRb3Z9, {from: accounts[2]});

		assert.equal(boolDPk7oCZ, true)
		await expect(Rexonaavzt2Dm.transfer.call(addresstzPdmNH, uintQO3Mf1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringiX1dnsI = "sUg0ANW6ftkPBs7Jq3EbJYyk8UkqMJkcXMjp7nEmTiKPYR0aWMsJEVu93LvicsWYEFTObIKFLB7B7"
		const stringyPjz8aY = "lfSp5XPYvMS6AipaTqJc8DgwovEIJpyt8haVdqj77s2r"
		const uints70gasq = BigInt("1906")
		const RexonaqT7uYro = await Rexona.new(stringiX1dnsI, stringyPjz8aY, uints70gasq, {from: "0x0000000000000000000000000000000000000001"});
		const uintmB1z3Vh = BigInt("353")
		const addressZkOYXFk = accounts[3]
		const uintAFK8d15 = BigInt("1229")
		const addressomnDiLb = accounts[3]
		const uintSzEU6DD = BigInt("142")
		const addressOkYqxQ = "0x0000000000000000000000000000000000000001"
		const addresslstzKnf = "0x0000000000000000000000000000000000000001"
		const boolNyb1WV = await RexonaqT7uYro.approve.call(addressZkOYXFk, uintmB1z3Vh, {from: accounts[3]});
		const boolkS5Ubb1 = await RexonaqT7uYro.approve.call(addressomnDiLb, uintAFK8d15, {from: accounts[4]});
		const boollD8WuP = await RexonaqT7uYro.transferFrom.call(addresslstzKnf, addressOkYqxQ, uintSzEU6DD, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringbppMHqR = "fmPWqoTQI4SfKLssaqoocjbQ22x1Txq4ejKIK"
		const stringNjXI6wA = "vy9ldosMAMY2QMz07DPnMhvfjTKgieE8q8Gr1BRDKc"
		const uintsDPCG9J = BigInt("57")
		const RexonadsRHQS = await Rexona.new(stringbppMHqR, stringNjXI6wA, uintsDPCG9J, {from: accounts[4]});
		const uintModEQWU = BigInt("1490")
		const addressPcStfG1 = accounts[4]
		const uintillpyrk = BigInt("1946")
		const addressuUv1wV = accounts[4]
		const addressq79B4SD = accounts[0]
		const uintTluo6aa = BigInt("1505")
		const addressr44dzIQ = accounts[4]
		const boolO5L7ivw = await RexonadsRHQS.approveAndCall.call(addressPcStfG1, uintModEQWU, {from: accounts[4]});
		const boolIRyY37Z = await RexonadsRHQS.transferFrom.call(addressq79B4SD, addressuUv1wV, uintillpyrk, {from: accounts[2]});
		const boolEZNkS8J = await RexonadsRHQS.transfer.call(addressr44dzIQ, uintTluo6aa, {from: accounts[1]});

		assert.equal(boolO5L7ivw, true)
		await expect(RexonadsRHQS.transferFrom.call(addressq79B4SD, addressuUv1wV, uintillpyrk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringeXKkxIa = "HEyR35vufLl9dGSQ7bSCZVKGKSxZOSxl75CpNsXWwGKOIGtY1EhzRIugGDS9QDbXYh7iK7I83x"
		const stringHkiLF14 = "nz5GXkk6IhR"
		const uintEm4J3Qa = BigInt("103")
		const RexonaWoN6bJT = await Rexona.new(stringeXKkxIa, stringHkiLF14, uintEm4J3Qa, {from: accounts[4]});
		const uintStLdVjS = BigInt("718")
		const addressqFdJrn = accounts[1]
		const uintMUJlHo1 = BigInt("378")
		const addresscCL18dj = accounts[5]
		const addresso2osgjl = accounts[3]
		const uintTVA5pIJ = BigInt("14")
		const addresssfivSDU = accounts[3]
		const uintEBY0MjS = BigInt("674")
		const address4dWAT5 = accounts[3]
		const boolEo06ut = await RexonaWoN6bJT.approve.call(addressqFdJrn, uintStLdVjS, {from: accounts[4]});
		const boolFRerR8 = await RexonaWoN6bJT.transferFrom.call(addresso2osgjl, addresscCL18dj, uintMUJlHo1, {from: accounts[2]});
		const boolrafVwK = await RexonaWoN6bJT.approve.call(addresssfivSDU, uintTVA5pIJ, {from: accounts[5]});
		const boolsRaaYH2 = await RexonaWoN6bJT.approve.call(address4dWAT5, uintEBY0MjS, {from: accounts[3]});

		assert.equal(boolEo06ut, true)
		await expect(RexonaWoN6bJT.transferFrom.call(addresso2osgjl, addresscCL18dj, uintMUJlHo1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbppMHqR = "fmPWqoTQI4SfKLssaqoocjbQ22x1Txq4ejKIK"
		const stringNjXI6wA = "vy9ldosMAMY2QMz07DPnMhvfjTKgieE8q8Gr1BRDKc"
		const uintrWhWKN = BigInt("57")
		const RexonadsRHQS = await Rexona.new(stringbppMHqR, stringNjXI6wA, uintrWhWKN, {from: accounts[4]});
		const uintjWeDqiE = BigInt("94")
		const addressznZpzYS = accounts[3]
		const uintOktORXa = BigInt("0")
		const addressRuxDRw = accounts[6]
		const addressIjxC8O = accounts[4]
		const addressrTPmvUR = accounts[3]
		const uintAgCNJyj = BigInt("45")
		const addressWhbXzQZ = accounts[3]
		const addressIK7Xwex = accounts[1]
		const addressJfQOig7 = accounts[3]
		const boolsA0gtiB = await RexonadsRHQS.approveAndCall.call(addressznZpzYS, uintjWeDqiE, {from: accounts[4]});
		const boolwhoD198 = await RexonadsRHQS.transferFrom.call(addressIjxC8O, addressRuxDRw, uintOktORXa, {from: accounts[3]});
		const boolq1q2a48 = await RexonadsRHQS.transferownership.call(addressrTPmvUR, {from: accounts[2]});
		const boolD0GFXyh = await RexonadsRHQS.transferFrom.call(addressIK7Xwex, addressWhbXzQZ, uintAgCNJyj, {from: "0x0000000000000000000000000000000000000001"});
		const booliad34Xr = await RexonadsRHQS.transferownership.call(addressJfQOig7, {from: accounts[1]});

		assert.equal(boolsA0gtiB, true)
		assert.equal(boolwhoD198, true)
		await expect(RexonadsRHQS.transferownership.call(addressrTPmvUR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbppMHqR = "fmPWqoTQI4SfKLssaqoocjbQ22x1Txq4ejKIK"
		const stringNjXI6wA = "vy9ldosMAMY2QMz07DPnMhvfjTKgieE8q8Gr1BRDKc"
		const uintRQqahSu = BigInt("57")
		const RexonadsRHQS = await Rexona.new(stringbppMHqR, stringNjXI6wA, uintRQqahSu, {from: accounts[4]});
		const uintYIgKeRY = BigInt("0")
		const addressUWT41Qn = accounts[5]
		const uintzpcU153 = BigInt("1144")
		const addressq8WXZ8p = accounts[0]
		const addressgR96mHQ = accounts[0]
		const uintuSeSRno = BigInt("440")
		const addressqeerXYZ = accounts[3]
		const addresse9kmkWO = accounts[4]
		const uintWRiP2nM = BigInt("543")
		const addresssW1Y3wc = accounts[3]
		const addresszYGYrWk = accounts[4]
		const addressjgh8UBW = accounts[0]
		const boolsA0gtiB = await RexonadsRHQS.approveAndCall.call(addressUWT41Qn, uintYIgKeRY, {from: accounts[4]});
		const boolPpIhiS = await RexonadsRHQS.transferFrom.call(addressgR96mHQ, addressq8WXZ8p, uintzpcU153, {from: accounts[2]});
		const boolWik8CoU = await RexonadsRHQS.transferFrom.call(addresse9kmkWO, addressqeerXYZ, uintuSeSRno, {from: accounts[2]});
		const boolgD7cWpv = await RexonadsRHQS.transferFrom.call(addresszYGYrWk, addresssW1Y3wc, uintWRiP2nM, {from: accounts[3]});
		const boolB8FhwK = await RexonadsRHQS.transferownership.call(addressjgh8UBW, {from: accounts[5]});

		assert.equal(boolsA0gtiB, true)
		await expect(RexonadsRHQS.transferFrom.call(addressgR96mHQ, addressq8WXZ8p, uintzpcU153, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})