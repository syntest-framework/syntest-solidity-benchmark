const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressqXAevuQ = "0x0000000000000000000000000000000000000001"
		const LayerxbLgykX = await Layerx.new(addressqXAevuQ, {from: accounts[1]});
		const uintBBaaj37 = BigInt("651")
		const addressgmRJLYX = accounts[3]
		const addresssIvZWCQ = accounts[4]
		const uintyQnyQ0L = BigInt("523")
		const uintxd4xyMA = BigInt("1662")
		const addressWr5czG = accounts[1]
		const uinttLbW8DA = BigInt("330")
		const boolr60Ktr = await LayerxbLgykX.approve.call(addressgmRJLYX, uintBBaaj37, {from: accounts[1]});
		const addressxo70kxP = await LayerxbLgykX.transferOwnership.call(addresssIvZWCQ, {from: accounts[4]});
		const uintxr3JvAq = await LayerxbLgykX.getStakesNum.call({from: accounts[1]});
		const uint256r01a0iV = await LayerxbLgykX.burn.call(uintyQnyQ0L, {from: accounts[4]});
		const boolyobrpmj = await LayerxbLgykX.transfer.call(addressWr5czG, uintxd4xyMA, {from: accounts[0]});
		const uintYO6rVNS = await LayerxbLgykX.withdraw.call(uinttLbW8DA, {from: accounts[2]});

		assert.equal(boolr60Ktr, true)
		await expect(LayerxbLgykX.transferOwnership.call(addresssIvZWCQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressStpSbZg = accounts[1]
		const LayerxmLthc6q = await Layerx.new(addressStpSbZg, {from: "0x0000000000000000000000000000000000000001"});
		const uintOpeAa6 = BigInt("436")
		const addresshpHV997 = accounts[2]
		await LayerxmLthc6q.f.call({from: accounts[4]});
		const uintRjo00cS = await LayerxmLthc6q.totalSupply.call({from: accounts[0]});
		const uint256gesuS45 = await LayerxmLthc6q.burn.call(uintOpeAa6, {from: accounts[2]});
		await LayerxmLthc6q.f.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxmLthc6q.unlock.call({from: accounts[4]});
		const addressIhWT421 = await LayerxmLthc6q.setNewStakeCreator.call(addresshpHV997, {from: accounts[4]});
	});

	it('test for Layerx', async () => {
		const addressp3qp1Zu = "0x0000000000000000000000000000000000000001"
		const LayerxXRR9BnD = await Layerx.new(addressp3qp1Zu, {from: accounts[5]});
		const uintCdiN8K6 = BigInt("1457")
		const addressxf1J6gF = "0x0000000000000000000000000000000000000001"
		const boolfdY5Ngr = false
		const uintj6JzsOf = await LayerxXRR9BnD.lock.call(uintCdiN8K6, {from: accounts[2]});
		const uintoVc8a16 = await LayerxXRR9BnD.balanceOf.call(addressxf1J6gF, {from: accounts[2]});
		const boolPlykb59 = await LayerxXRR9BnD.setIsPaused.call(boolfdY5Ngr, {from: accounts[3]});
		await LayerxXRR9BnD.paused.call({from: accounts[1]});

		await expect(LayerxXRR9BnD.lock.call(uintCdiN8K6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTMZz9HJ = accounts[0]
		const LayerxTIB75U = await Layerx.new(addressTMZz9HJ, {from: accounts[0]});
		await LayerxTIB75U.f.call({from: accounts[3]});
		const uintWqpbWvG = await LayerxTIB75U.totalSupply.call({from: accounts[2]});
		await LayerxTIB75U.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxTIB75U.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressy8TWHS = accounts[4]
		const LayerxavASEP = await Layerx.new(addressy8TWHS, {from: accounts[4]});
		const uintnYKcATf = BigInt("431")
		const addressjUOZgJ = accounts[5]
		const uintc86kK96 = BigInt("1924")
		const addressJplIpUj = accounts[1]
		const address4XFqTD = accounts[0]
		const addressItvV4Ia = accounts[0]
		const uintgEVhTNm = await LayerxavASEP.totalSupply.call({from: accounts[4]});
		const boolKTjUVTi = await LayerxavASEP.transfer.call(addressjUOZgJ, uintnYKcATf, {from: accounts[1]});
		const booloYFtPLp = await LayerxavASEP.transfer.call(addressJplIpUj, uintc86kK96, {from: accounts[1]});
		await LayerxavASEP.addStakePayment.call({from: accounts[3]});
		const uintv6jm8aE = await LayerxavASEP.allowance.call(addressItvV4Ia, address4XFqTD, {from: accounts[1]});
		const uintPV7Ue3C = await LayerxavASEP.totalSupply.call({from: accounts[3]});

		assert.equal(uintgEVhTNm, BigInt("40000000000000000000000"))
		await expect(LayerxavASEP.transfer.call(addressjUOZgJ, uintnYKcATf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjcpexrE = accounts[0]
		const LayerxUdnliE = await Layerx.new(addressjcpexrE, {from: accounts[4]});
		const byteMbammOZ = "0x170b12130e0809171d20110a0014201a160e1a0b0c1a0516041619"
		const uintm05CxIU = BigInt("414")
		const addressF0DmCHW = accounts[0]
		const uintkmqQfql = BigInt("1850")
		const addressPJvO734 = accounts[4]
		const addressz1tRt1 = accounts[2]
		const bytej9Qy5k3 = "0x171e15120d0e0d0b181916102019110913"
		const uintUnq2C8P = BigInt("1428")
		const addressZ0tRSNp = accounts[0]
		const uintfYm6yC = BigInt("496")
		const addressby3fWmZ = accounts[3]
		const addressrkllVJY = "0x0000000000000000000000000000000000000001"
		const addressdNklFg = accounts[4]
		const boolJo3nNJE = await LayerxUdnliE.approveAndCall.call(addressF0DmCHW, uintm05CxIU, byteMbammOZ, {from: accounts[5]});
		const boolaXGIgxo = await LayerxUdnliE.approve.call(addressPJvO734, uintkmqQfql, {from: accounts[4]});
		const uintJjDGMea = await LayerxUdnliE.balanceOf.call(addressz1tRt1, {from: accounts[4]});
		const boolYS6RD42 = await LayerxUdnliE.approveAndCall.call(addressZ0tRSNp, uintUnq2C8P, bytej9Qy5k3, {from: accounts[4]});
		const boolf1jnvuH = await LayerxUdnliE.transferFrom.call(addressrkllVJY, addressby3fWmZ, uintfYm6yC, {from: accounts[2]});
		const addresswKAkY5F = await LayerxUdnliE.transferOwnership.call(addressdNklFg, {from: accounts[2]});

		await expect(LayerxUdnliE.approveAndCall.call(addressF0DmCHW, uintm05CxIU, byteMbammOZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXhL8r1H = "0x0000000000000000000000000000000000000001"
		const LayerxnvcUb1X = await Layerx.new(addressXhL8r1H, {from: accounts[2]});
		const uintRy8b2gL = BigInt("1182")
		const uintxZsWxVa = await LayerxnvcUb1X.getStakesNum.call({from: accounts[0]});
		const uintzdCVWli = await LayerxnvcUb1X.exist.call(uintRy8b2gL, {from: accounts[0]});

		assert.equal(uintxZsWxVa, BigInt("1"))
		await expect(LayerxnvcUb1X.exist.call(uintRy8b2gL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHWbOFpJ = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressHWbOFpJ, {from: accounts[2]});
		const addresslHPudbo = accounts[2]
		const addressmoLqoOf = accounts[3]
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addressmoLqoOf, addresslHPudbo, {from: accounts[4]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});

		assert.equal(uintahHvJwu, BigInt("0"))
		await expect(LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDGrvGDx = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressDGrvGDx, {from: accounts[2]});
		const addressxp7b2cm = accounts[2]
		const addresss9T7rAE = "0x0000000000000000000000000000000000000000"
		const boolCynN3nR = false
		await LayerxkUl9nk5.addStakePayment.call({from: accounts[3]});
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addresss9T7rAE, addressxp7b2cm, {from: accounts[4]});
		const boolAGvqAoP = await LayerxkUl9nk5.setIsPaused.call(boolCynN3nR, {from: accounts[5]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});

		await expect(LayerxkUl9nk5.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressoNSrwR = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressoNSrwR, {from: accounts[2]});
		const addressV1aelFG = "0x0000000000000000000000000000000000000000"
		const addressA4dCzns = accounts[3]
		const uint5dxuqY = BigInt("1694")
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addressA4dCzns, addressV1aelFG, {from: accounts[4]});
		const uintNr6OnWr = await LayerxkUl9nk5.withdraw.call(uint5dxuqY, {from: accounts[4]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});
		await LayerxkUl9nk5.unlock.call({from: accounts[0]});
		const uintMKjQgS = await LayerxkUl9nk5.totalSupply.call({from: accounts[3]});

		assert.equal(uintahHvJwu, BigInt("0"))
		await expect(LayerxkUl9nk5.withdraw.call(uint5dxuqY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressazs1vcg = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressazs1vcg, {from: accounts[2]});
		const addressKOmHwLp = accounts[1]
		const address8KeomH = accounts[4]
		const addressB4MTPyj = "0x0000000000000000000000000000000000000000"
		const uintW8bprPX = BigInt("108")
		const addressYMmMvhQ = accounts[1]
		const addressoPobAm4 = accounts[3]
		const boolCynN3nR = false
		const bool7Bf6yo = false
		const uintmuH2VAo = await LayerxkUl9nk5.balanceOf.call(addressKOmHwLp, {from: accounts[1]});
		await LayerxkUl9nk5.addStakePayment.call({from: accounts[3]});
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addressB4MTPyj, address8KeomH, {from: accounts[4]});
		const boolw7dgBoj = await LayerxkUl9nk5.transferFrom.call(addressoPobAm4, addressYMmMvhQ, uintW8bprPX, {from: accounts[1]});
		const boolAGvqAoP = await LayerxkUl9nk5.setIsPaused.call(boolCynN3nR, {from: accounts[5]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIIUvED = await LayerxkUl9nk5.setIsPaused.call(bool7Bf6yo, {from: accounts[3]});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});

		assert.equal(uintmuH2VAo, BigInt("0"))
		await expect(LayerxkUl9nk5.addStakePayment.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQ8wcq8R = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressQ8wcq8R, {from: accounts[2]});
		const boolawshYg = true
		const addressOgEN2CF = "0x0000000000000000000000000000000000000001"
		const addresszveyDHX = accounts[2]
		const boolaDkzYb = await LayerxkUl9nk5.setIsPaused.call(boolawshYg, {from: accounts[4]});
		const uintfXxgKy1 = await LayerxkUl9nk5.allowance.call(addresszveyDHX, addressOgEN2CF, {from: accounts[2]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintfXxgKy1, BigInt("0"))
		await expect(LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresslk0iQKR = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addresslk0iQKR, {from: accounts[2]});
		const uintOKDAV5K = BigInt("410")
		const addressavbymEj = accounts[2]
		const addressbZXLzQF = accounts[1]
		const boolgxIRTKU = await LayerxkUl9nk5.transferFrom.call(addressbZXLzQF, addressavbymEj, uintOKDAV5K, {from: accounts[3]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxkUl9nk5.unlock.call({from: accounts[0]});
		await LayerxkUl9nk5.paused.call({from: accounts[4]});

		await expect(LayerxkUl9nk5.transferFrom.call(addressbZXLzQF, addressavbymEj, uintOKDAV5K, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUaSyNS6 = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressUaSyNS6, {from: accounts[2]});
		const addressBxNHbJN = accounts[2]
		const addressZoF7Qn6 = "0x0000000000000000000000000000000000000001"
		const addressEsqHIdR = accounts[3]
		const uintEBqxuWd = BigInt("1571")
		const addressKD1PxP5 = accounts[2]
		const addressGH1jfsI = accounts[0]
		const uintOHKN3a4 = BigInt("162")
		const boolFmvni3R = false
		const addressBlbN13t = await LayerxkUl9nk5.setNewStakeCreator.call(addressBxNHbJN, {from: accounts[4]});
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addressEsqHIdR, addressZoF7Qn6, {from: accounts[4]});
		const boolT4ksYG4 = await LayerxkUl9nk5.transferFrom.call(addressGH1jfsI, addressKD1PxP5, uintEBqxuWd, {from: accounts[0]});
		const uintHtjNOmO = await LayerxkUl9nk5.lock.call(uintOHKN3a4, {from: accounts[1]});
		const booluAGKGeG = await LayerxkUl9nk5.setIsPaused.call(boolFmvni3R, {from: accounts[4]});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});

		assert.equal(uintahHvJwu, BigInt("0"))
		await expect(LayerxkUl9nk5.transferFrom.call(addressGH1jfsI, addressKD1PxP5, uintEBqxuWd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressck1zu1s = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressck1zu1s, {from: accounts[2]});
		const addresssJ3F32A = "0x0000000000000000000000000000000000000001"
		const addressVNWdGEi = accounts[3]
		const uintwGP5kS = BigInt("1169")
		const uinta1ykjtz = BigInt("162")
		const uintbl7KwhP = BigInt("162")
		const boolFmvni3R = true
		const uintahHvJwu = await LayerxkUl9nk5.allowance.call(addressVNWdGEi, addresssJ3F32A, {from: accounts[4]});
		const uint256KwfXN9o = await LayerxkUl9nk5.burn.call(uintwGP5kS, {from: accounts[4]});
		const uintHtjNOmO = await LayerxkUl9nk5.lock.call(uinta1ykjtz, {from: accounts[1]});
		const uintzGZgG2O = await LayerxkUl9nk5.lock.call(uintbl7KwhP, {from: accounts[2]});
		const booluAGKGeG = await LayerxkUl9nk5.setIsPaused.call(boolFmvni3R, {from: accounts[4]});
		await LayerxkUl9nk5.onlyOwner.call({from: accounts[4]});

		assert.equal(uintahHvJwu, BigInt("0"))
		await expect(LayerxkUl9nk5.lock.call(uinta1ykjtz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressnzIFCyJ = accounts[4]
		const LayerxkUl9nk5 = await Layerx.new(addressnzIFCyJ, {from: accounts[2]});
		const uintVvNoaye = await LayerxkUl9nk5.totalSupply.call({from: accounts[5]});
		await LayerxkUl9nk5.addStakePayment.call({from: accounts[4]});
		await LayerxkUl9nk5.unlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintVvNoaye, BigInt("40000000000000000000000"))
		await expect(LayerxkUl9nk5.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfW2nJOi = "0x0000000000000000000000000000000000000001"
		const LayerxnvcUb1X = await Layerx.new(addressfW2nJOi, {from: accounts[2]});
		const uintUUYlxYI = BigInt("0")
		const uintL3TdzGj = await LayerxnvcUb1X.lock.call(uintUUYlxYI, {from: accounts[4]});

		await expect(LayerxnvcUb1X.lock.call(uintUUYlxYI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address0ljzpL = accounts[1]
		const LayerxWZmz2iJ = await Layerx.new(address0ljzpL, {from: accounts[5]});
		const addressXj0ycoB = accounts[3]
		const uintoHFdEOx = BigInt("1971")
		const uintcu5J9EO = BigInt("1771")
		const addressr1n0UZ2 = await LayerxWZmz2iJ.transferOwnership.call(addressXj0ycoB, {from: accounts[1]});
		const uintzyPIuD2 = await LayerxWZmz2iJ.withdraw.call(uintoHFdEOx, {from: accounts[0]});
		const uintQJWFDLa = await LayerxWZmz2iJ.withdraw.call(uintcu5J9EO, {from: accounts[3]});

		await expect(LayerxWZmz2iJ.withdraw.call(uintoHFdEOx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})