const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerhR1JWeb = await vnxManager.new({from: accounts[5]});
		const uintlbSviY = BigInt("31")
		const addressOgWqerL = accounts[4]
		const boolvoLH0Wa = await vnxManagerhR1JWeb.isOwner.call({from: accounts[0]});
		const addressGSQ9aEm = await vnxManagerhR1JWeb.addBearer.call(addressOgWqerL, uintlbSviY, {from: accounts[2]});

		assert.equal(boolvoLH0Wa, false)
		await expect(vnxManagerhR1JWeb.addBearer.call(addressOgWqerL, uintlbSviY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerK9kGjJS = await vnxManager.new({from: accounts[1]});
		const stringZLwIDEi = "ctkVia41YRPUnYxuwpjvgJ3M6EZM4UHhc364gAm9cSjhn7Gk5XRcjPQgAHuGjzQxs"
		const uintSOaiBVd = BigInt("1967")
		const stringoOfbd2U = "1MlovjYmBRP9po9sGRHDdKvuYsl4jXKCgtdmSKxoHm3YxqDwz8eeDiJXBNQmxQ"
		const uint256fkRShRh = await vnxManagerK9kGjJS.addRootRole.call(stringZLwIDEi, {from: accounts[2]});
		const uint2562ILHCK = await vnxManagerK9kGjJS.addRole.call(stringoOfbd2U, uintSOaiBVd, {from: "0x0000000000000000000000000000000000000001"});
		const boolRdyrYIo = await vnxManagerK9kGjJS.isOwner.call({from: accounts[4]});

		assert.equal(uint256fkRShRh, BigInt("0"))
		await expect(vnxManagerK9kGjJS.addRole.call(stringoOfbd2U, uintSOaiBVd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerHh6GgN3 = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwgtcZTH = BigInt("93")
		const addresse8GVFyt = accounts[3]
		const uintyVTPzVG = BigInt("1217")
		const stringecGDSlO = "ySbKUCS7FlTl3uUxnlxU49irkKQFyFBNdgEsn3WT8PtB1e1hdUfdzM56efVwYDJhOqxzbnrBQPJXLIWnSGf03DVuxO8yjVv"
		await vnxManagerHh6GgN3.renounceOwnership.call({from: accounts[2]});
		await vnxManagerHh6GgN3.onlyAdmin.call({from: accounts[2]});
		const booljhq0KUR = await vnxManagerHh6GgN3.hasRole.call(addresse8GVFyt, uintwgtcZTH, {from: accounts[3]});
		await vnxManagerHh6GgN3.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await vnxManagerHh6GgN3.onlyAdmin.call({from: accounts[1]});
		const uint256FzWR0iC = await vnxManagerHh6GgN3.addRole.call(stringecGDSlO, uintyVTPzVG, {from: accounts[4]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerhUlTPFb = await vnxManager.new({from: accounts[0]});
		const uintupEqodi = BigInt("1065")
		const addresswBsX0h8 = accounts[0]
		const uintDUYwppU = BigInt("844")
		const addressGUlDNWo = accounts[2]
		await vnxManagerhUlTPFb.onlyOwner.call({from: accounts[3]});
		const boollHzp5Zx = await vnxManagerhUlTPFb.isAdmin.call({from: accounts[1]});
		const addressc6CGI7n = await vnxManagerhUlTPFb.addBearer.call(addresswBsX0h8, uintupEqodi, {from: accounts[5]});
		const boolJTffHSp = await vnxManagerhUlTPFb.hasRole.call(addressGUlDNWo, uintDUYwppU, {from: accounts[0]});

		await expect(vnxManagerhUlTPFb.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerd8YQ5Ab = await vnxManager.new({from: accounts[3]});
		const addressmwJpLyV = accounts[5]
		const addressm8EGAp9 = accounts[0]
		const boolTA5g9ba = await vnxManagerd8YQ5Ab.isAdmin.call({from: accounts[5]});
		const boolFvrNpzc = await vnxManagerd8YQ5Ab.isOwner.call({from: accounts[4]});
		const boolhq64ao = await vnxManagerd8YQ5Ab.isOwner.call({from: accounts[0]});
		const boolUjP2CcY = await vnxManagerd8YQ5Ab.transferContractOwnership.call(addressm8EGAp9, addressmwJpLyV, {from: accounts[0]});

		assert.equal(boolFvrNpzc, false)
		assert.equal(boolTA5g9ba, false)
		assert.equal(boolhq64ao, false)
		await expect(vnxManagerd8YQ5Ab.transferContractOwnership.call(addressm8EGAp9, addressmwJpLyV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerh4ETmQe = await vnxManager.new({from: accounts[2]});
		const uintxLSekCH = BigInt("881")
		const addressYce1PuN = accounts[4]
		const addressHIqAmFY = accounts[4]
		const addressoAvZO14 = accounts[3]
		const uint256DpFUT0T = await vnxManagerh4ETmQe.totalRoles.call({from: accounts[3]});
		const addressZhCTpMY = await vnxManagerh4ETmQe.addBearer.call(addressYce1PuN, uintxLSekCH, {from: accounts[4]});
		const boolaqT9n5 = await vnxManagerh4ETmQe.transferContractOwnership.call(addressoAvZO14, addressHIqAmFY, {from: accounts[4]});

		assert.equal(uint256DpFUT0T, BigInt("1"))
		await expect(vnxManagerh4ETmQe.addBearer.call(addressYce1PuN, uintxLSekCH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVPa1IEm = await vnxManager.new({from: accounts[5]});
		const uintpicwVe = BigInt("1619")
		const addressFetis7i = accounts[1]
		const boolqqSSayG = await vnxManagerVPa1IEm.isOwner.call({from: accounts[1]});
		await vnxManagerVPa1IEm.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBfLrXxx = await vnxManagerVPa1IEm.hasRole.call(addressFetis7i, uintpicwVe, {from: accounts[5]});

		assert.equal(boolqqSSayG, false)
		await expect(vnxManagerVPa1IEm.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroyqD7Wi = await vnxManager.new({from: accounts[4]});
		const uinteiGcuiW = BigInt("1361")
		const addresst66tXaY = accounts[2]
		const addressg57cQXM = accounts[2]
		const addressb1rP8X8 = await vnxManageroyqD7Wi.removeBearer.call(addresst66tXaY, uinteiGcuiW, {from: accounts[2]});
		const boolTGWxhjH = await vnxManageroyqD7Wi.isAdmin.call({from: accounts[5]});
		const addressMi2D1w = await vnxManageroyqD7Wi.transferOwnership.call(addressg57cQXM, {from: accounts[0]});

		await expect(vnxManageroyqD7Wi.removeBearer.call(addresst66tXaY, uinteiGcuiW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhR1JWeb = await vnxManager.new({from: accounts[5]});
		const stringEostvJV = "IXJn2vUcIdHCfQGHWCOFY8F4sdGrVZ3MLL5Dz"
		const uinthdgQPwy = BigInt("0")
		const addressKC68jow = accounts[4]
		const addressm23XNAZ = await vnxManagerhR1JWeb.owner.call({from: accounts[4]});
		const uint256Nn0WW52 = await vnxManagerhR1JWeb.addRootRole.call(stringEostvJV, {from: accounts[4]});
		const boolvoLH0Wa = await vnxManagerhR1JWeb.isOwner.call({from: accounts[0]});
		const addressGSQ9aEm = await vnxManagerhR1JWeb.addBearer.call(addressKC68jow, uinthdgQPwy, {from: accounts[2]});

		assert.equal(addressm23XNAZ, 0x4798eccef2105937fA89Ed51197225F0E0eB4F6A)
		assert.equal(boolvoLH0Wa, false)
		assert.equal(uint256Nn0WW52, BigInt("0"))
		await expect(vnxManagerhR1JWeb.addBearer.call(addressKC68jow, uinthdgQPwy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhR1JWeb = await vnxManager.new({from: accounts[5]});
		const addressPBtBOWw = accounts[0]
		const addressgc5odkG = accounts[1]
		const boolvoLH0Wa = await vnxManagerhR1JWeb.isOwner.call({from: accounts[0]});
		const boolCXDCuxJ = await vnxManagerhR1JWeb.transferContractOwnership.call(addressgc5odkG, addressPBtBOWw, {from: accounts[5]});

		assert.equal(boolvoLH0Wa, false)
		await expect(vnxManagerhR1JWeb.transferContractOwnership.call(addressgc5odkG, addressPBtBOWw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwfAAKpD = await vnxManager.new({from: accounts[1]});
		const uint256vZEGREa = await vnxManagerwfAAKpD.totalRoles.call({from: accounts[1]});
		await vnxManagerwfAAKpD.renounceOwnership.call({from: accounts[1]});
		const boolK7cJAyR = await vnxManagerwfAAKpD.isAdmin.call({from: accounts[0]});
		const uint256jikF24L = await vnxManagerwfAAKpD.totalRoles.call({from: accounts[0]});

		assert.equal(uint256vZEGREa, BigInt("1"))
		await expect(vnxManagerwfAAKpD.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerLbVfZva = await vnxManager.new({from: accounts[3]});
		const addressEtCmZkw = accounts[0]
		const uintPSdLobq = BigInt("711")
		const stringzkQrIn = "cMlLoS2Kf2bnAKhb2BVMNqnFqAjs1uClhI3gEUl81Dng66ZQTzTVYvNGdl4nyJSuL7IE9ReqADKoGuvD8SQWeO"
		const addressHXlaE19 = accounts[2]
		const addressZNwax6e = accounts[4]
		const addresslk6ZRH4 = await vnxManagerLbVfZva.transferOwnership.call(addressEtCmZkw, {from: accounts[3]});
		const uint256Nqn7thK = await vnxManagerLbVfZva.addRole.call(stringzkQrIn, uintPSdLobq, {from: accounts[4]});
		await vnxManagerLbVfZva.onlyAdmin.call({from: accounts[5]});
		const boolRZiui6b = await vnxManagerLbVfZva.transferContractOwnership.call(addressZNwax6e, addressHXlaE19, {from: accounts[2]});

		await expect(vnxManagerLbVfZva.addRole.call(stringzkQrIn, uintPSdLobq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})