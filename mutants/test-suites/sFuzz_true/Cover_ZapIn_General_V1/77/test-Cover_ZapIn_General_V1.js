const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthTocCXD = BigInt("2034")
		const Cover_ZapIn_General_V1RODkg0c = await Cover_ZapIn_General_V1.new(uinthTocCXD, {from: accounts[3]});
		const byteUvaekr = "0x0507021e0900121f08000402031b011017201909"
		const addressnlIW0H6 = accounts[2]
		const addresszsBmw6I = accounts[3]
		const uintmaUBKiq = BigInt("987")
		const addressuCgFqGU = accounts[5]
		const addressvvp4L7l = accounts[2]
		const addressTpQg1Y = accounts[3]
		const addressX71btS = accounts[5]
		const addressWfQGnNC = accounts[3]
		const addressteY2QHR = accounts[3]
		const uintbcR70r2 = BigInt("148")
		const address5C0aGt = accounts[5]
		const addressb2LxiXZ = accounts[3]
		const addresszACAXUP = accounts[3]
		const uintHgnZQd0 = BigInt("846")
		const addressQB7hY5U = accounts[4]
		await Cover_ZapIn_General_V1RODkg0c.renounceOwnership.call({from: accounts[0]});
		await Cover_ZapIn_General_V1RODkg0c.nonReentrant.call({from: accounts[1]});
		const 
wkdcKZd = await Cover_ZapIn_General_V1RODkg0c.ZapIn.call(addressX71btS, addressTpQg1Y, addressvvp4L7l, addressuCgFqGU, uintmaUBKiq, addresszsBmw6I, addressnlIW0H6, byteUvaekr, {from: accounts[0]});
		const 
ooV26Lz = await Cover_ZapIn_General_V1RODkg0c._enterPosition.call(address5C0aGt, uintbcR70r2, addressteY2QHR, addressWfQGnNC, {from: accounts[3]});
		const 
zW0QBF9 = await Cover_ZapIn_General_V1RODkg0c._enterPosition.call(addressQB7hY5U, uintHgnZQd0, addresszACAXUP, addressb2LxiXZ, {from: accounts[5]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGSurMPn = BigInt("303")
		const Cover_ZapIn_General_V1EZt2cLJ = await Cover_ZapIn_General_V1.new(uintGSurMPn, {from: accounts[4]});
		const addressW39OKZ = "0x0000000000000000000000000000000000000001"
		await Cover_ZapIn_General_V1EZt2cLJ.nonReentrant.call({from: accounts[1]});
		await Cover_ZapIn_General_V1EZt2cLJ.toggleContractActive.call({from: accounts[4]});
		const addressOgjgRC7 = await Cover_ZapIn_General_V1EZt2cLJ.transferOwnership.call(addressW39OKZ, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintUWjRweV = BigInt("295")
		const Cover_ZapIn_General_V1sD6wy3b = await Cover_ZapIn_General_V1.new(uintUWjRweV, {from: "0x0000000000000000000000000000000000000001"});
		const byteXMIxzxo = "0x08011b0a040c0f18060d16"
		const addressBcf6vf1 = accounts[1]
		const addresss7oepzt = accounts[3]
		const uinthLbikzm = BigInt("720")
		const addressOvKkvt2 = accounts[0]
		const addressPtd0xcF = accounts[4]
		const addressOWoelJm = accounts[4]
		const addressBNPp9Sd = "0x0000000000000000000000000000000000000001"
		const 
vMqX2JX = await Cover_ZapIn_General_V1sD6wy3b.ZapIn.call(addressBNPp9Sd, addressOWoelJm, addressPtd0xcF, addressOvKkvt2, uinthLbikzm, addresss7oepzt, addressBcf6vf1, byteXMIxzxo, {from: accounts[1]});
		await Cover_ZapIn_General_V1sD6wy3b.renounceOwnership.call({from: accounts[2]});
		const addressDKPcb3 = await Cover_ZapIn_General_V1sD6wy3b.owner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintHC6LVrW = BigInt("1509")
		const Cover_ZapIn_General_V1zGWgJmw = await Cover_ZapIn_General_V1.new(uintHC6LVrW, {from: accounts[4]});
		const addressPw9Tr3y = accounts[0]
		const addressYyOM3RS = await Cover_ZapIn_General_V1zGWgJmw.transferOwnership.call(addressPw9Tr3y, {from: accounts[4]});
		const boolOCKY9i3 = await Cover_ZapIn_General_V1zGWgJmw.isOwner.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintkxnecfT = BigInt("266")
		const Cover_ZapIn_General_V1rN8Lc0g = await Cover_ZapIn_General_V1.new(uintkxnecfT, {from: accounts[1]});
		const byteWzAAORl = "0x201015130c171c0f0c1f03161317171419101a020e02"
		const addressZ1NH5TL = accounts[4]
		const addressES4YxkQ = accounts[3]
		const uintCnsNMDp = BigInt("1661")
		const address4wwDEC = accounts[1]
		const address0DL44c = accounts[5]
		const addressSpLLHur = accounts[0]
		const addressU1wTqrU = accounts[3]
		const addressGksBnyU = "0x0000000000000000000000000000000000000001"
		const addresslCkt8dr = accounts[2]
		const uintKpYPqny = BigInt("1040")
		const addresspb49bR3 = accounts[0]
		const 
U0JgO0V = await Cover_ZapIn_General_V1rN8Lc0g.ZapIn.call(addressU1wTqrU, addressSpLLHur, address0DL44c, address4wwDEC, uintCnsNMDp, addressES4YxkQ, addressZ1NH5TL, byteWzAAORl, {from: accounts[0]});
		await Cover_ZapIn_General_V1rN8Lc0g.renounceOwnership.call({from: accounts[0]});
		const addressZNmabPP = await Cover_ZapIn_General_V1rN8Lc0g.inCaseTokengetsStuck.call(addressGksBnyU, {from: accounts[0]});
		await Cover_ZapIn_General_V1rN8Lc0g.renounceOwnership.call({from: accounts[1]});
		const addressxGMMGnA = await Cover_ZapIn_General_V1rN8Lc0g.inCaseTokengetsStuck.call(addresslCkt8dr, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1rN8Lc0g._enterCover.call(addresspb49bR3, uintKpYPqny, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintxjeN0IT = BigInt("1901")
		const Cover_ZapIn_General_V1JVuLtXN = await Cover_ZapIn_General_V1.new(uintxjeN0IT, {from: accounts[1]});
		const addressS44P6q = accounts[2]
		const addressPiIdFZB = await Cover_ZapIn_General_V1JVuLtXN.owner.call({from: accounts[4]});
		const addresshk8yWcK = await Cover_ZapIn_General_V1JVuLtXN.inCaseTokengetsStuck.call(addressS44P6q, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintuDk2qUa = BigInt("1127")
		const Cover_ZapIn_General_V166dKVP = await Cover_ZapIn_General_V1.new(uintuDk2qUa, {from: accounts[1]});
		const uintFTXKZpn = BigInt("1581")
		const addressHHTqHd = accounts[1]
		const addressof9Lfx3 = "0x0000000000000000000000000000000000000001"
		const addressaPnxtds = accounts[2]
		const uintNcJYBsL = BigInt("249")
		const addresseSggvDo = accounts[4]
		const byter08nJA9 = "0x060602050d13"
		const addresssdTyiFa = accounts[4]
		const addressvWSK9Dc = accounts[2]
		const uintBak7mO = BigInt("44")
		const addressa4LgQmi = accounts[3]
		const addressgF0R3d1 = accounts[2]
		const addressFe5VGsS = accounts[0]
		const addressH352Ad1 = accounts[0]
		await Cover_ZapIn_General_V166dKVP.renounceOwnership.call({from: accounts[1]});
		await Cover_ZapIn_General_V166dKVP.nonReentrant.call({from: accounts[4]});
		await Cover_ZapIn_General_V166dKVP._enterCover.call(addressHHTqHd, uintFTXKZpn, {from: accounts[2]});
		const addressEGiib7g = await Cover_ZapIn_General_V166dKVP.owner.call({from: accounts[3]});
		const 
mvSMul3 = await Cover_ZapIn_General_V166dKVP._enterPosition.call(addresseSggvDo, uintNcJYBsL, addressaPnxtds, addressof9Lfx3, {from: accounts[0]});
		const 
v6bncQ1 = await Cover_ZapIn_General_V166dKVP.ZapIn.call(addressH352Ad1, addressFe5VGsS, addressgF0R3d1, addressa4LgQmi, uintBak7mO, addressvWSK9Dc, addresssdTyiFa, byter08nJA9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintdFOrU7y = BigInt("1509")
		const Cover_ZapIn_General_V1zGWgJmw = await Cover_ZapIn_General_V1.new(uintdFOrU7y, {from: accounts[4]});
		const addressMhoIl1L = accounts[0]
		const boolOCKY9i3 = await Cover_ZapIn_General_V1zGWgJmw.isOwner.call({from: accounts[3]});
		const addressp8PdpHU = await Cover_ZapIn_General_V1zGWgJmw.owner.call({from: accounts[5]});
		const addressmlm4LoM = await Cover_ZapIn_General_V1zGWgJmw.inCaseTokengetsStuck.call(addressMhoIl1L, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintaQriIo = BigInt("1901")
		const Cover_ZapIn_General_V1JVuLtXN = await Cover_ZapIn_General_V1.new(uintaQriIo, {from: accounts[1]});
		const uintGa1yM9g = BigInt("1249")
		const byteJHdDk6s = "0x0300"
		const addressycmv7Va = accounts[1]
		const addressNoIAJ07 = accounts[0]
		const uintnqSzKC = BigInt("1322")
		const addressOf4OXIa = accounts[2]
		const addressBNwnR6e = accounts[4]
		const addressBvHvvKw = accounts[2]
		const addressfTjMOea = accounts[3]
		const uint16Gqhetyz = await Cover_ZapIn_General_V1JVuLtXN.set_new_goodwill.call(uintGa1yM9g, {from: accounts[1]});
		await Cover_ZapIn_General_V1JVuLtXN.withdraw.call({from: accounts[1]});
		const 
MXWhjuG = await Cover_ZapIn_General_V1JVuLtXN.ZapIn.call(addressfTjMOea, addressBvHvvKw, addressBNwnR6e, addressOf4OXIa, uintnqSzKC, addressNoIAJ07, addressycmv7Va, byteJHdDk6s, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintLkDzx4V = BigInt("1509")
		const Cover_ZapIn_General_V1zGWgJmw = await Cover_ZapIn_General_V1.new(uintLkDzx4V, {from: accounts[4]});
		const boolOCKY9i3 = await Cover_ZapIn_General_V1zGWgJmw.isOwner.call({from: accounts[3]});
		await Cover_ZapIn_General_V1zGWgJmw.toggleContractActive.call({from: accounts[4]});
	});
})