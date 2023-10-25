const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAPK8Aija = await TPA.new({from: accounts[2]});
		const addressNEbiav = accounts[3]
		const uintP684Grr = BigInt("155")
		await TPAPK8Aija.pause.call({from: accounts[0]});
		await TPAPK8Aija.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const string5YMpXJ = await TPAPK8Aija.symbol.call({from: accounts[3]});
		const uint256yw1M7De = await TPAPK8Aija.balanceOf.call(addressNEbiav, {from: accounts[2]});
		const uint256zftdS5k = await TPAPK8Aija.burn.call(uintP684Grr, {from: accounts[3]});
		const stringmoyyVJr = await TPAPK8Aija.name.call({from: accounts[5]});

		await expect(TPAPK8Aija.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAQcJZwkW = await TPA.new({from: accounts[5]});
		const addressMyfrtnV = accounts[2]
		const addresspaRkibD = accounts[0]
		const addressqDUuI9v = accounts[0]
		const uintDJqgKRM = BigInt("93")
		const addresstUUyGe3 = accounts[2]
		const addressKeQUW7Z = accounts[3]
		const addressmS1ugKk = await TPAQcJZwkW.removeAdmin.call(addressMyfrtnV, {from: accounts[5]});
		const addressUeg8zE = await TPAQcJZwkW.removeAdmin.call(addresspaRkibD, {from: accounts[3]});
		const addressLI5VY5 = await TPAQcJZwkW.notFrozen.call(addressqDUuI9v, {from: accounts[1]});
		const boolhJ7BeGt = await TPAQcJZwkW.transferFrom.call(addressKeQUW7Z, addresstUUyGe3, uintDJqgKRM, {from: accounts[5]});

		await expect(TPAQcJZwkW.removeAdmin.call(addressMyfrtnV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const string2KsqOi = "6Fm6DA8Lyt7q6OpuJilYBjbN3KlqL9kPtlCZPzQv77V4q7Yx6pUe8cAGrVKGaC0uNjgLiwmQ"
		const stringRP9nuz = "GGbt85Tz1jSYYJhwwaMWWASDOZMOO3XcvcfxNQy2"
		const uintJMMLPzl = BigInt("228")
		const TPAJEeQtaG = await TPA.new(string2KsqOi, stringRP9nuz, uintJMMLPzl, {from: accounts[3]});
		const uintcDWtgy = BigInt("318")
		const addressyNTZ0xI = accounts[0]
		const addressi2JjZAp = accounts[1]
		const uint8fZ4EmWD = await TPAJEeQtaG.decimals.call({from: accounts[5]});
		const boolNM6f0N9 = await TPAJEeQtaG.transferFrom.call(addressi2JjZAp, addressyNTZ0xI, uintcDWtgy, {from: accounts[1]});
		const boolj6wmdC = await TPAJEeQtaG.paused.call({from: accounts[0]});
		const uint8uBVK53Y = await TPAJEeQtaG.decimals.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAvs9QYtU = await TPA.new({from: accounts[5]});
		const addressMmSNXJC = "0x0000000000000000000000000000000000000001"
		const uintFMLnIK = BigInt("2016")
		const addressxhdqsrY = accounts[4]
		await TPAvs9QYtU.whenPaused.call({from: accounts[3]});
		const uint256bNPmKm5 = await TPAvs9QYtU.balanceOf.call(addressMmSNXJC, {from: accounts[5]});
		await TPAvs9QYtU.whenNotPaused.call({from: accounts[1]});
		const stringlrw4hxU = await TPAvs9QYtU.name.call({from: accounts[5]});
		const boolOfpA6rB = await TPAvs9QYtU.approve.call(addressxhdqsrY, uintFMLnIK, {from: accounts[2]});

		await expect(TPAvs9QYtU.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPADNNKK7Z = await TPA.new({from: accounts[3]});
		const addressvXymwe = accounts[0]
		const uintNIEmwnS = BigInt("576")
		const addresstjhENn3 = accounts[1]
		const uintfHwJ6uB = BigInt("1943")
		const addressbiOXGPh = accounts[4]
		const uint256wOiwcZW = await TPADNNKK7Z.totalSupply.call({from: accounts[3]});
		const booloHrH9Py = await TPADNNKK7Z.freezeAccount.call(addressvXymwe, {from: accounts[1]});
		const boolL9menGl = await TPADNNKK7Z.increaseAllowance.call(addresstjhENn3, uintNIEmwnS, {from: accounts[4]});
		const boolZLgWt7f = await TPADNNKK7Z.approve.call(addressbiOXGPh, uintfHwJ6uB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wOiwcZW, BigInt("10000000000000000000000000000"))
		await expect(TPADNNKK7Z.freezeAccount.call(addressvXymwe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAJToraaZ = await TPA.new({from: accounts[0]});
		const uintDtg8cp3 = BigInt("903")
		const addressX4Db6W = accounts[3]
		const uintgC8shnH = BigInt("520")
		const addressgcnpJ7Q = accounts[4]
		const addressZ19N20n = accounts[4]
		const addressSDUQ9TC = accounts[5]
		const addressVLqHsvC = accounts[2]
		const addressaa450o6 = accounts[1]
		const boolw5yIs3P = await TPAJToraaZ.decreaseAllowance.call(addressX4Db6W, uintDtg8cp3, {from: accounts[5]});
		const boolW0gaeSA = await TPAJToraaZ.transferFrom.call(addressZ19N20n, addressgcnpJ7Q, uintgC8shnH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DJMVyLv = await TPAJToraaZ.balanceOf.call(addressSDUQ9TC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DcD7Zdh = await TPAJToraaZ.balanceOf.call(addressVLqHsvC, {from: accounts[0]});
		const addressXQfS4mB = await TPAJToraaZ.addAdmin.call(addressaa450o6, {from: accounts[1]});
		await TPAJToraaZ.pause.call({from: accounts[5]});

		await expect(TPAJToraaZ.decreaseAllowance.call(addressX4Db6W, uintDtg8cp3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyrCbGU = await TPA.new({from: accounts[0]});
		const addresswcOsa4R = accounts[0]
		const uintV4jDxTD = BigInt("152")
		const uintlGQYsmu = BigInt("1315")
		const addresssNGNf3n = accounts[1]
		const addressBzUMrhC = accounts[0]
		const uintQ8IqEuS = BigInt("869")
		const addressnexUgij = accounts[3]
		const uintlSMKDyO = BigInt("221")
		const boolkxUDFk3 = await TPAyrCbGU.freezeAccount.call(addresswcOsa4R, {from: accounts[0]});
		const uint256Ghgoq83 = await TPAyrCbGU.burn.call(uintV4jDxTD, {from: accounts[1]});
		const boolVMtfcW4 = await TPAyrCbGU.transferFrom.call(addressBzUMrhC, addresssNGNf3n, uintlGQYsmu, {from: accounts[0]});
		const stringncsEu7f = await TPAyrCbGU.name.call({from: accounts[0]});
		const boolSe9QzD3 = await TPAyrCbGU.decreaseAllowance.call(addressnexUgij, uintQ8IqEuS, {from: accounts[2]});
		const uint256pvCUAB = await TPAyrCbGU.burn.call(uintlSMKDyO, {from: accounts[3]});

		assert.equal(boolkxUDFk3, true)
		await expect(TPAyrCbGU.burn.call(uintV4jDxTD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAauvVqqq = await TPA.new({from: accounts[3]});
		const addressOqshCA1 = accounts[4]
		const addressqrw3gIt = accounts[3]
		const uintTxHgRIl = BigInt("852")
		const addressuv8d5Uk = accounts[2]
		const addresskcXxz0p = accounts[2]
		const uintIeTcdmP = BigInt("1412")
		const uinterHeEDK = BigInt("1343")
		const addressn8EEJvu = accounts[3]
		const uint256cLV0Pl = await TPAauvVqqq.allowance.call(addressqrw3gIt, addressOqshCA1, {from: accounts[4]});
		const address9tBNvC = await TPAauvVqqq.burnFrom.call(addressuv8d5Uk, uintTxHgRIl, {from: accounts[0]});
		const uint256NJOAiYa = await TPAauvVqqq.balanceOf.call(addresskcXxz0p, {from: accounts[3]});
		const uint256rwZclWK = await TPAauvVqqq.burn.call(uintIeTcdmP, {from: accounts[4]});
		await TPAauvVqqq.renounceAdmin.call({from: accounts[3]});
		const boolGcw9cFl = await TPAauvVqqq.approve.call(addressn8EEJvu, uinterHeEDK, {from: accounts[1]});

		assert.equal(uint256cLV0Pl, BigInt("0"))
		await expect(TPAauvVqqq.burnFrom.call(addressuv8d5Uk, uintTxHgRIl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAUtQP0ci = await TPA.new({from: accounts[1]});
		const uintbHfKPnp = BigInt("1037")
		const addressNZetrx2 = accounts[3]
		const addressIr6lRVd = accounts[2]
		const addressZuZyJZP = accounts[1]
		const boolVhguOv = await TPAUtQP0ci.approve.call(addressNZetrx2, uintbHfKPnp, {from: accounts[5]});
		const boolkaZAYyh = await TPAUtQP0ci.paused.call({from: accounts[0]});
		const boolqU4fwuD = await TPAUtQP0ci.isOwner.call(addressIr6lRVd, {from: accounts[3]});
		const addressBXi2cr = await TPAUtQP0ci.transferOwnership.call(addressZuZyJZP, {from: accounts[4]});

		assert.equal(boolVhguOv, true)
		assert.equal(boolkaZAYyh, false)
		assert.equal(boolqU4fwuD, false)
		await expect(TPAUtQP0ci.transferOwnership.call(addressZuZyJZP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const uintr8vx0UD = BigInt("1601")
		const addressK2yStCB = accounts[1]
		const addressc39O9Cm = accounts[3]
		const stringnpC8SCX = await TPAArtCoev.symbol.call({from: accounts[3]});
		const boolyEnDZPJ = await TPAArtCoev.increaseAllowance.call(addressK2yStCB, uintr8vx0UD, {from: accounts[2]});
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressc39O9Cm, {from: accounts[1]});

		assert.equal(boolyEnDZPJ, true)
		assert.equal(stringnpC8SCX, "TPA")
		assert.equal(uint256Y2unvZG, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const addressQyd8ElR = "0x0000000000000000000000000000000000000001"
		const uintnRJzNAY = BigInt("1601")
		const addressvrsnsva = accounts[1]
		const addressuknePQ2 = accounts[5]
		const uintfXMYrfj = BigInt("1260")
		const uintJdo3UOg = BigInt("858")
		const address3r66U8 = accounts[3]
		const addressuh77NxN = await TPAArtCoev.transferOwnership.call(addressQyd8ElR, {from: accounts[2]});
		const boolyEnDZPJ = await TPAArtCoev.increaseAllowance.call(addressvrsnsva, uintnRJzNAY, {from: accounts[2]});
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressuknePQ2, {from: accounts[1]});
		const boolGsHmTR3 = await TPAArtCoev.lock.call(address3r66U8, uintJdo3UOg, uintfXMYrfj, {from: accounts[5]});

		assert.equal(boolyEnDZPJ, true)
		assert.equal(uint256Y2unvZG, BigInt("0"))
		await expect(TPAArtCoev.lock.call(address3r66U8, uintJdo3UOg, uintfXMYrfj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const uintYPuLHzh = BigInt("220")
		const addressakqfXAG = "0x0000000000000000000000000000000000000001"
		const uintcR7lsXs = BigInt("1601")
		const addresst9JtaEQ = accounts[1]
		const addressvTaQ4Jp = accounts[5]
		const uint256qb1EMMx = await TPAArtCoev.totalSupply.call({from: accounts[2]});
		const boolc7IvU0m = await TPAArtCoev.transfer.call(addressakqfXAG, uintYPuLHzh, {from: accounts[5]});
		const boolyEnDZPJ = await TPAArtCoev.increaseAllowance.call(addresst9JtaEQ, uintcR7lsXs, {from: accounts[2]});
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressvTaQ4Jp, {from: accounts[1]});

		assert.equal(uint256qb1EMMx, BigInt("10000000000000000000000000000"))
		await expect(TPAArtCoev.transfer.call(addressakqfXAG, uintYPuLHzh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAQRHUwDm = await TPA.new({from: accounts[2]});
		const uintFuRfbuN = BigInt("1538")
		const address7wsJAu = accounts[2]
		await TPAQRHUwDm.renounceAdmin.call({from: accounts[5]});
		const boolj1fcZuK = await TPAQRHUwDm.decreaseAllowance.call(address7wsJAu, uintFuRfbuN, {from: accounts[1]});

		await expect(TPAQRHUwDm.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const addressfKY5a6 = accounts[6]
		const uintV1AfHGK = BigInt("1260")
		const addressN89F9oA = accounts[2]
		const addressCB667rW = accounts[3]
		const addressa347xJF = accounts[3]
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressfKY5a6, {from: accounts[1]});
		const boolmNEM3Yi = await TPAArtCoev.transferFrom.call(addressCB667rW, addressN89F9oA, uintV1AfHGK, {from: accounts[5]});
		const boolxbjveWP = await TPAArtCoev.isAdmin.call(addressa347xJF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Y2unvZG, BigInt("0"))
		await expect(TPAArtCoev.transferFrom.call(addressCB667rW, addressN89F9oA, uintV1AfHGK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPATNO21M = await TPA.new({from: accounts[3]});
		const uintIzDdzcb = BigInt("1179")
		const uintfmstZCK = BigInt("830")
		const addresswcRqwP2 = accounts[1]
		const uintu4vkYCQ = BigInt("1198")
		const addressSXJPZPf = accounts[0]
		const uintbKf0tn4 = BigInt("86")
		const addressmwXe2Q = accounts[1]
		const boolN7E5h6F = await TPATNO21M.lock.call(addresswcRqwP2, uintfmstZCK, uintIzDdzcb, {from: accounts[3]});
		const uint256GsrHf6 = await TPATNO21M.burn.call(uintu4vkYCQ, {from: accounts[0]});
		const addresslR2d3zA = await TPATNO21M.removeAdmin.call(addressSXJPZPf, {from: accounts[0]});
		const boolwLBVTue = await TPATNO21M.transfer.call(addressmwXe2Q, uintbKf0tn4, {from: accounts[1]});

		await expect(TPATNO21M.lock.call(addresswcRqwP2, uintfmstZCK, uintIzDdzcb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAmgbgMq9 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		await TPAmgbgMq9.pause.call({from: accounts[1]});
		await TPAmgbgMq9.whenNotPaused.call({from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const addressAZ7ANLz = accounts[6]
		const addresskMoAlV = accounts[4]
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressAZ7ANLz, {from: accounts[1]});
		const addressBZEdqAU = await TPAArtCoev.addAdmin.call(addresskMoAlV, {from: accounts[2]});

		assert.equal(uint256Y2unvZG, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAH1EbbHt = await TPA.new({from: accounts[4]});
		const uintVjvwwt0 = BigInt("812")
		const addressHfYczxg = accounts[5]
		const addressJokXBpc = accounts[2]
		const uintLST2EH = BigInt("601")
		const uint8pxbT7E3 = await TPAH1EbbHt.decimals.call({from: accounts[0]});
		const boolHxrt3XU = await TPAH1EbbHt.transferFrom.call(addressJokXBpc, addressHfYczxg, uintVjvwwt0, {from: accounts[0]});
		const uint256NDR9L3q = await TPAH1EbbHt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringE53nfo4 = await TPAH1EbbHt.name.call({from: accounts[3]});
		const uint256NvWwCJk = await TPAH1EbbHt.burn.call(uintLST2EH, {from: accounts[3]});

		assert.equal(uint8pxbT7E3, BigInt("18"))
		await expect(TPAH1EbbHt.transferFrom.call(addressJokXBpc, addressHfYczxg, uintVjvwwt0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAthf2LmH = await TPA.new({from: accounts[2]});
		const addressDGTBS4u = accounts[1]
		const uintiXk48md = BigInt("604")
		const addressYT3tBi = accounts[2]
		const addresszZlVhgh = accounts[0]
		const stringgKpgdfe = await TPAthf2LmH.name.call({from: accounts[0]});
		await TPAthf2LmH.whenPaused.call({from: accounts[1]});
		const addressj4SdRam = await TPAthf2LmH.addAdmin.call(addressDGTBS4u, {from: "0x0000000000000000000000000000000000000001"});
		const boolnQxR9z = await TPAthf2LmH.transferFrom.call(addresszZlVhgh, addressYT3tBi, uintiXk48md, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringgKpgdfe, "TPA")
		await expect(TPAthf2LmH.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const uint2Za52l = BigInt("220")
		const addressv3WzN1P = "0x00000000000000000000000000000000000000-1"
		const uintJEuR32h = BigInt("1022")
		const addresssSCUfkg = accounts[1]
		const addressAfUT8iU = accounts[0]
		const boolc7IvU0m = await TPAArtCoev.transfer.call(addressv3WzN1P, uint2Za52l, {from: accounts[5]});
		const boolNkDXov8 = await TPAArtCoev.decreaseAllowance.call(addresssSCUfkg, uintJEuR32h, {from: accounts[2]});
		const boolJ3Q6A7s = await TPAArtCoev.freezeAccount.call(addressAfUT8iU, {from: accounts[4]});

		await expect(TPAArtCoev.transfer.call(addressv3WzN1P, uint2Za52l, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const uintDmMNp3Z = BigInt("203")
		const uintQAydhRM = BigInt("283")
		const addressFIlto9C = accounts[0]
		const uintAdETEKp = BigInt("230")
		const addressNOqSw3f = "0x0000000000000000000000000000000000000000"
		const boolwTZl8Ct = await TPAArtCoev.transferWithLock.call(addressFIlto9C, uintQAydhRM, uintDmMNp3Z, {from: accounts[2]});
		const boolc7IvU0m = await TPAArtCoev.transfer.call(addressNOqSw3f, uintAdETEKp, {from: accounts[5]});

		assert.equal(boolwTZl8Ct, true)
		await expect(TPAArtCoev.transfer.call(addressNOqSw3f, uintAdETEKp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAArtCoev = await TPA.new({from: accounts[2]});
		const uintfGoAxlw = BigInt("577")
		const addressNCXW6W7 = accounts[0]
		const addressn7RPPy = accounts[6]
		const boolgqA1dMg = await TPAArtCoev.unlock.call(addressNCXW6W7, uintfGoAxlw, {from: accounts[2]});
		const uint8C9rsro4 = await TPAArtCoev.decimals.call({from: accounts[0]});
		const uint256Y2unvZG = await TPAArtCoev.balanceOf.call(addressn7RPPy, {from: accounts[1]});

		await expect(TPAArtCoev.unlock.call(addressNCXW6W7, uintfGoAxlw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})