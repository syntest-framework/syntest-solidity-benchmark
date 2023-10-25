const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintAqmgwWG = BigInt("977")
		const stringppkDpNr = "QIAFYvq6oor7mHVmBNYzMPIMuJotrcIJP6nHTK1rzbgA2l6Y2Q4lZiVJ0Jzd2g6kEisZ6xxNusVfKZD2c8WwY5eGPCsJ"
		const stringBGVwGJu = "GtYP254yw01jqTJemklwsJSrMvPWD3ZqIcDqsLdkGebRlOfLPWhiLhDRU4BPYjsGIPzbNsHtV"
		const INSlFBBXoF = await INS.new(uintAqmgwWG, stringppkDpNr, stringBGVwGJu, {from: accounts[0]});
		const bytelSyuzQ6 = "0x171c0416111414100d050509"
		const uintbT66bO0 = BigInt("1746")
		const addresshTLzZW = accounts[4]
		const uintigk5i6o = BigInt("1113")
		const addressaEwSQN = "0x0000000000000000000000000000000000000001"
		const byteQUBo1y2 = "0x0b121b1215181e07031f0b0c0f18"
		const uintVAByI0L = BigInt("1676")
		const addressfrtIYyL = accounts[1]
		const uintltBlfLB = BigInt("1798")
		const addressHcw666u = accounts[2]
		const byteEJpvCyN = "0x1506080902201a040b05021e180c17190406140b"
		const uintcbygMwc = BigInt("106")
		const addressvRgq4Ev = accounts[2]
		const boola6CiwSz = await INSlFBBXoF.approveAndCall.call(addresshTLzZW, uintbT66bO0, bytelSyuzQ6, {from: "0x0000000000000000000000000000000000000001"});
		const boolomTTz5D = await INSlFBBXoF.approve.call(addressaEwSQN, uintigk5i6o, {from: accounts[3]});
		const boolz3iWLRy = await INSlFBBXoF.approveAndCall.call(addressfrtIYyL, uintVAByI0L, byteQUBo1y2, {from: accounts[3]});
		const booleXTcJ4Z = await INSlFBBXoF.approve.call(addressHcw666u, uintltBlfLB, {from: accounts[4]});
		const boolJTYe76v = await INSlFBBXoF.approveAndCall.call(addressvRgq4Ev, uintcbygMwc, byteEJpvCyN, {from: accounts[0]});

		await expect(INSlFBBXoF.approveAndCall.call(addresshTLzZW, uintbT66bO0, bytelSyuzQ6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSxYX1S = BigInt("1096")
		const stringgVViO9m = "q3q9Cdw35RtEe4khYzKToP5WShQIUODAlfFF"
		const stringhQCQ1As = "CGU1h8BLcD9UefgvIT1PYr2nGmAAaHsP6c4bOUpK86GMibWKjF65PgEvtTRLlCMOFEE0ocNTLLD"
		const INSfh6DSSk = await INS.new(uintSxYX1S, stringgVViO9m, stringhQCQ1As, {from: accounts[3]});
		const uintRpaXeG = BigInt("405")
		const addressYRmPp60 = accounts[4]
		const uintAZaboUR = BigInt("978")
		const addressQZljXsd = accounts[1]
		const boolFoUXY4X = await INSfh6DSSk.burnFrom.call(addressYRmPp60, uintRpaXeG, {from: accounts[4]});
		const boolm9FUBhy = await INSfh6DSSk.approve.call(addressQZljXsd, uintAZaboUR, {from: accounts[3]});

		await expect(INSfh6DSSk.burnFrom.call(addressYRmPp60, uintRpaXeG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintxClDKLL = BigInt("1599")
		const stringUhH7zsJ = "6HNComsf9lB9LQeUo2Dx9hDZw9foxETqFenwBppWSpNZeeZHCr9yMdV4pW"
		const stringhWClwgt = "JemTiqGudp9BCCMyaUBKAaGhbHFClClH3pTaVjQ8n2cWa4T6B16SO9pk56UVJJlnNvI4BCRZkMJ3S"
		const INSsG1R630 = await INS.new(uintxClDKLL, stringUhH7zsJ, stringhWClwgt, {from: "0x0000000000000000000000000000000000000001"});
		const uintIu6fPo = BigInt("2032")
		const addressdwnrAx9 = accounts[0]
		const uintl0ZeGmH = BigInt("1627")
		const uintJGfJO1p = BigInt("1434")
		const uintWRSrrpz = BigInt("249")
		const uintguCRvXw = BigInt("127")
		const boolNZeaf3n = await INSsG1R630.approve.call(addressdwnrAx9, uintIu6fPo, {from: accounts[3]});
		const boolzYtmpKx = await INSsG1R630.burn.call(uintl0ZeGmH, {from: accounts[4]});
		const boolN5IH7yO = await INSsG1R630.burn.call(uintJGfJO1p, {from: accounts[4]});
		const boolzCqxbdL = await INSsG1R630.burn.call(uintWRSrrpz, {from: accounts[3]});
		const boolHeKw9bN = await INSsG1R630.burn.call(uintguCRvXw, {from: accounts[1]});
	});

	it('test for INS', async () => {
		const uintmur0o4a = BigInt("1753")
		const stringc2fevyv = "4PiG8cKXlHqKj79"
		const stringQveAgQV = "F5cDYXF"
		const INSR5q1tJR = await INS.new(uintmur0o4a, stringc2fevyv, stringQveAgQV, {from: accounts[2]});
		const uintCS8CeJ = BigInt("157")
		const addressF8M3bsu = accounts[4]
		const addressQCKvTri = accounts[4]
		const byter7jyRAf = "0x1e0007031b16130b0f"
		const uintQsFHpWJ = BigInt("72")
		const addressOd3ZzR = accounts[4]
		const uintyEtbLus = BigInt("202")
		const addressd8I0eyV = "0x0000000000000000000000000000000000000001"
		const byteh8pmC9a = "0x1d0e0909040b090a1805010e0f150714091e1d0715060103"
		const uintk6upW7 = BigInt("771")
		const addressJrV0dgU = accounts[2]
		const uinti1WRBtu = BigInt("1419")
		const addressh2JCFCH = accounts[0]
		const boolHFwYqxB = await INSR5q1tJR.transferFrom.call(addressQCKvTri, addressF8M3bsu, uintCS8CeJ, {from: accounts[0]});
		const boolqcZVX1f = await INSR5q1tJR.approveAndCall.call(addressOd3ZzR, uintQsFHpWJ, byter7jyRAf, {from: accounts[2]});
		const booll4IWY0B = await INSR5q1tJR.approve.call(addressd8I0eyV, uintyEtbLus, {from: accounts[4]});
		const boolAcM70zS = await INSR5q1tJR.approveAndCall.call(addressJrV0dgU, uintk6upW7, byteh8pmC9a, {from: accounts[3]});
		const boolx91d7jD = await INSR5q1tJR.approve.call(addressh2JCFCH, uinti1WRBtu, {from: accounts[4]});

		await expect(INSR5q1tJR.transferFrom.call(addressQCKvTri, addressF8M3bsu, uintCS8CeJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintC6bG3Ox = BigInt("1096")
		const stringgVViO9m = "q3q9Cdw35RtEe4khYzKToP5WShQIUODAlfFF"
		const stringhQCQ1As = "CGU1h8BLcD9UefgvIT1PYr2nGmAAaHsP6c4bOUpK86GMibWKjF65PgEvtTRLlCMOFEE0ocNTLLD"
		const INSfh6DSSk = await INS.new(uintC6bG3Ox, stringgVViO9m, stringhQCQ1As, {from: accounts[3]});
		const uintFB6X8Q = BigInt("1146")
		const addressPzakc9t = accounts[0]
		const uintR1sk0eS = BigInt("405")
		const addressUULOzey = accounts[5]
		const boolYy4POu1 = await INSfh6DSSk.transfer.call(addressPzakc9t, uintFB6X8Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolFoUXY4X = await INSfh6DSSk.burnFrom.call(addressUULOzey, uintR1sk0eS, {from: accounts[4]});

		await expect(INSfh6DSSk.transfer.call(addressPzakc9t, uintFB6X8Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinto1287k0 = BigInt("1096")
		const stringgVViO9m = "q3q9Cdw35RtEe4khYzKToP5WShQIUODAlfFF"
		const stringhQCQ1As = "CGU1h8BLcD9UefgvIT1PYr2nGmAAaHsP6c4bOUpK86GMibWKjF65PgEvtTRLlCMOFEE0ocNTLLD"
		const INSfh6DSSk = await INS.new(uinto1287k0, stringgVViO9m, stringhQCQ1As, {from: accounts[3]});
		const uintYhCcMPB = BigInt("1018")
		const uintQzebaD = BigInt("215")
		const addressn3tePWN = accounts[3]
		const uintPkIWMeF = BigInt("413")
		const addressXcJ1KB = accounts[4]
		const boolEKDKUXo = await INSfh6DSSk.burn.call(uintYhCcMPB, {from: accounts[0]});
		const booldTyeQ1r = await INSfh6DSSk.approve.call(addressn3tePWN, uintQzebaD, {from: accounts[1]});
		const boolFoUXY4X = await INSfh6DSSk.burnFrom.call(addressXcJ1KB, uintPkIWMeF, {from: accounts[4]});

		await expect(INSfh6DSSk.burn.call(uintYhCcMPB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})