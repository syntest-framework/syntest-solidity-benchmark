const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringE1XX0G = "k197qEwh6yJk7vGt2gllniCljQu9IM5OVsaHYguE3s9KTymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck"
		const stringJJCTpw = "pSHioC5qSVF8FCEGWj448rdcGvAY81gApxjkUzVGNMToDxLH5uBo"
		const uintUQrPFNb = BigInt("1415")
		const RexonanBCul0Q = await Rexona.new(stringE1XX0G, stringJJCTpw, uintUQrPFNb, {from: accounts[4]});
		const uint60ORch = BigInt("805")
		const addressSwUqGaA = accounts[5]
		const uint6ssKsI = BigInt("657")
		const addressANOT9fo = accounts[0]
		const uinteUB6F1i = BigInt("909")
		const addressMfnjYif = accounts[1]
		const boolttrh4qd = await RexonanBCul0Q.approve.call(addressSwUqGaA, uint60ORch, {from: accounts[4]});
		const boolXm9Z9dJ = await RexonanBCul0Q.approveAndCall.call(addressANOT9fo, uint6ssKsI, {from: accounts[4]});
		const boolRa7W9m = await RexonanBCul0Q.approveAndCall.call(addressMfnjYif, uinteUB6F1i, {from: accounts[0]});

		assert.equal(boolXm9Z9dJ, true)
		assert.equal(boolttrh4qd, true)
		await expect(RexonanBCul0Q.approveAndCall.call(addressMfnjYif, uinteUB6F1i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringxsu0BHa = "257hePjwbKEQe6OCwVBJjpc7Asyqzwix8IPORD9xYYifyX9fev1Jl1n2SF4N3ycv08wdwYyoPIvdyFSmjPaQ4rduOKc9rsP"
		const stringl6Na8l = "fLxkeeEKicvVdIlmL9EfCRCVckmjLktaftJQdLsyxtq599UwZksmvXvuEqIN4Q6AJ8Mby5"
		const uintLvPMPCZ = BigInt("1371")
		const RexonaZdgSLTP = await Rexona.new(stringxsu0BHa, stringl6Na8l, uintLvPMPCZ, {from: accounts[0]});
		const uintjNiRc4Y = BigInt("2047")
		const addressUqMJfU = "0x0000000000000000000000000000000000000001"
		const uintDRjShE6 = BigInt("604")
		const addressiqa9qny = accounts[5]
		const addressiNMyAlq = accounts[2]
		const boolDK5yaa4 = await RexonaZdgSLTP.approve.call(addressUqMJfU, uintjNiRc4Y, {from: accounts[3]});
		const boolKyAikci = await RexonaZdgSLTP.transfer.call(addressiqa9qny, uintDRjShE6, {from: accounts[5]});
		const boolU0mBSNS = await RexonaZdgSLTP.transferownership.call(addressiNMyAlq, {from: accounts[3]});

		assert.equal(boolDK5yaa4, true)
		await expect(RexonaZdgSLTP.transfer.call(addressiqa9qny, uintDRjShE6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringKgE3bzp = "eCwoDDOngZ9gSB8ulu7XakpzAB"
		const stringS0Lh074 = "VCGYLW6ru5FXWpJ5L7iWckEC9dyTAuPlVaJW3Ra1hYC56Wmk5bcyU2P2VPhEiYTuHHBf9erPf"
		const uintrA2FXqE = BigInt("1507")
		const RexonaiVxSD6a = await Rexona.new(stringKgE3bzp, stringS0Lh074, uintrA2FXqE, {from: accounts[0]});
		const uintrxL0vQo = BigInt("1580")
		const addressZDNRqM7 = accounts[5]
		const addressQURORGy = accounts[1]
		const uintKGjHH6P = BigInt("631")
		const addressbHqpY4u = accounts[2]
		const uintVfOmmQz = BigInt("1924")
		const addressq3zHEbJ = accounts[1]
		const uintCtqme54 = BigInt("1313")
		const addressCy5EZme = accounts[2]
		const addressg9i4cnT = accounts[5]
		const boolzoI8XKn = await RexonaiVxSD6a.approve.call(addressZDNRqM7, uintrxL0vQo, {from: accounts[5]});
		const boolF50RxQL = await RexonaiVxSD6a.transferownership.call(addressQURORGy, {from: accounts[4]});
		const boolcv86RIa = await RexonaiVxSD6a.approveAndCall.call(addressbHqpY4u, uintKGjHH6P, {from: accounts[3]});
		const boolzUZ9zTZ = await RexonaiVxSD6a.approveAndCall.call(addressq3zHEbJ, uintVfOmmQz, {from: accounts[5]});
		const booltzqCqYt = await RexonaiVxSD6a.transferFrom.call(addressg9i4cnT, addressCy5EZme, uintCtqme54, {from: accounts[1]});

		assert.equal(boolzoI8XKn, true)
		await expect(RexonaiVxSD6a.transferownership.call(addressQURORGy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringE1XX0G = "k197qEwh6yJk7vGt2gllniCljQu9IM5OVsaHYguE3s9KTymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck"
		const stringJJCTpw = "pSHioC5qSVF8FCEGWj448rdcGvAY81gApxjkUzVGNMToDxLH5uBo"
		const uintY7quD6 = BigInt("1415")
		const RexonanBCul0Q = await Rexona.new(stringE1XX0G, stringJJCTpw, uintY7quD6, {from: accounts[4]});
		const uintXV7xG0c = BigInt("1893")
		const addressmjwmJtI = accounts[4]
		const addressMfX6zhq = accounts[2]
		const uintILLKsOw = BigInt("639")
		const addressTkMLnQT = accounts[0]
		const boolxDOz3e = await RexonanBCul0Q.transfer.call(addressmjwmJtI, uintXV7xG0c, {from: accounts[3]});
		const boolm88KrH7 = await RexonanBCul0Q.transferownership.call(addressMfX6zhq, {from: accounts[2]});
		const boolXm9Z9dJ = await RexonanBCul0Q.approveAndCall.call(addressTkMLnQT, uintILLKsOw, {from: accounts[4]});

		await expect(RexonanBCul0Q.transfer.call(addressmjwmJtI, uintXV7xG0c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringE1XX0G = "k197qEwh6yJk7vGt2gllniCljQu9IM5OVsaHYguE3s9KTymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck"
		const stringJJCTpw = "pSHioC5qSVF8FCEGWj448rdcGvAY81gApxjkUzVGNMToDxLH5uBo"
		const uintUHsPVTT = BigInt("1415")
		const RexonanBCul0Q = await Rexona.new(stringE1XX0G, stringJJCTpw, uintUHsPVTT, {from: accounts[4]});
		const uintwPAawVr = BigInt("430")
		const addressknvhHs5 = accounts[5]
		const uintj2bJhdS = BigInt("0")
		const addresstfEFEMP = accounts[0]
		const addressbWJ95b1 = accounts[6]
		const uintZ9SUiEU = BigInt("431")
		const addressgmUWVE = accounts[1]
		const boolNOqEmQj = await RexonanBCul0Q.approve.call(addressknvhHs5, uintwPAawVr, {from: accounts[0]});
		const boolrk1zFh = await RexonanBCul0Q.transferFrom.call(addressbWJ95b1, addresstfEFEMP, uintj2bJhdS, {from: accounts[4]});
		const boolokF8Wf7 = await RexonanBCul0Q.approveAndCall.call(addressgmUWVE, uintZ9SUiEU, {from: accounts[4]});

		assert.equal(boolNOqEmQj, true)
		assert.equal(boolokF8Wf7, true)
		assert.equal(boolrk1zFh, true)
	});

	it('test for Rexona', async () => {
		const stringzhPNSns = "3TyIeyLuIDRkxzj"
		const stringMwVjaBy = "cmDBrfUmJyuHooNysgt7Ct50AHCZvy9mr1KjefmgN4sh2sDHeMYStwJFAV2fbN3CCSp4ChtYJyu2YZ5fXiIBRHcVAS7"
		const uinttFN946H = BigInt("1985")
		const RexonaodNLn3t = await Rexona.new(stringzhPNSns, stringMwVjaBy, uinttFN946H, {from: "0x0000000000000000000000000000000000000001"});
		const uintDVyj6Ri = BigInt("212")
		const addressDeBBCyC = accounts[4]
		const uintD3ZXaQ = BigInt("1197")
		const address29gZXu = accounts[5]
		const uinthOMXO99 = BigInt("1398")
		const addressBLZ7VDj = accounts[0]
		const uintsb4rAZu = BigInt("1325")
		const addressY724dpX = accounts[1]
		const boolE67Y6mx = await RexonaodNLn3t.approve.call(addressDeBBCyC, uintDVyj6Ri, {from: "0x0000000000000000000000000000000000000001"});
		const boolJ6JSgx = await RexonaodNLn3t.approve.call(address29gZXu, uintD3ZXaQ, {from: accounts[3]});
		const boolsPb00Nq = await RexonaodNLn3t.approve.call(addressBLZ7VDj, uinthOMXO99, {from: accounts[0]});
		const boolH9bGZRV = await RexonaodNLn3t.transfer.call(addressY724dpX, uintsb4rAZu, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringE1XX0G = "k197qEwh6yJk7vGt2gllniCljQu9IM5OVsaHYguE3s9KTymsGtx6Lbwx1rAiCJ8qhjbfmaFBvPFjJTLRZks3MPqNXnck"
		const stringJJCTpw = "pSHioC5qSVF8FCEGWj448rdcGvAY81gApxjkUzVGNMToDxLH5uBo"
		const uintVSAmsCJ = BigInt("1415")
		const RexonanBCul0Q = await Rexona.new(stringE1XX0G, stringJJCTpw, uintVSAmsCJ, {from: accounts[4]});
		const uintaynQpFN = BigInt("0")
		const addressPdyGeVL = accounts[5]
		const boolReOb0no = await RexonanBCul0Q.approveAndCall.call(addressPdyGeVL, uintaynQpFN, {from: accounts[4]});

		assert.equal(boolReOb0no, true)
	});
})