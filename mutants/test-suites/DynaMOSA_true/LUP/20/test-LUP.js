const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPAyJOmpx = await LUP.new({from: accounts[0]});
		const uintoF1FIYS = BigInt("842")
		const addressbyLRztb = accounts[5]
		const uintBZB8AjB = BigInt("96")
		const addressEDqWZ1 = accounts[1]
		const uintV0iJZJz = BigInt("480")
		const addressJpfrHSY = accounts[1]
//		const boolnDlOIO = await LUPAyJOmpx.unlock.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]});
//		const boolwmpOOhv = await LUPAyJOmpx.unlock.call(addressEDqWZ1, uintBZB8AjB, {from: accounts[4]});
//		const uint8WtMnk5i = await LUPAyJOmpx.decimals.call({from: accounts[5]});
//		const stringN9RIfJQ = await LUPAyJOmpx.symbol.call({from: accounts[2]});
//		const bool3ELTld = await LUPAyJOmpx.transfer.call(addressJpfrHSY, uintV0iJZJz, {from: accounts[2]});

		await expect(LUPAyJOmpx.unlock.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPOodqVZZ = await LUP.new({from: accounts[3]});
		const addressZJqn38e = accounts[3]
		const uintJszDaC7 = BigInt("1424")
		const address1sK3Fh = accounts[3]
		const addressJmE18U2 = accounts[0]
//		const addressGkhHNiA = await LUPOodqVZZ.upgradeTo.call(addressZJqn38e, {from: accounts[4]});
//		const boolrQkM3cI = await LUPOodqVZZ.unlock.call(address1sK3Fh, uintJszDaC7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GCcqthF = await LUPOodqVZZ.balanceOf.call(addressJmE18U2, {from: accounts[4]});
//		const stringrGFNsv = await LUPOodqVZZ.name.call({from: accounts[3]});
//		const stringFoKuBg3 = await LUPOodqVZZ.symbol.call({from: accounts[0]});

		await expect(LUPOodqVZZ.upgradeTo.call(addressZJqn38e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const uintAIzUs2d = BigInt("2013")
		const addresspwAqLwd = accounts[2]
		const addresscuOehcf = accounts[4]
		const uintPU2vaPC = BigInt("1595")
		const addressebcenaF = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addresspwAqLwd, uintAIzUs2d, {from: accounts[4]});
//		const addressy8lSiFP = await LUPY1qmCKU.upgradeTo.call(addresscuOehcf, {from: accounts[2]});
//		const uint8VzqK85V = await LUPY1qmCKU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressebcenaF, uintPU2vaPC, {from: accounts[3]});

		assert.equal(stringHRiAzwJ, "LINKUP Token")
		await expect(LUPY1qmCKU.transfer.call(addresspwAqLwd, uintAIzUs2d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUP9UQFHr = await LUP.new({from: accounts[1]});
		const address6L0xyU = accounts[1]
		const uintOd9wIQx = BigInt("647")
		const uintkyWx96o = BigInt("867")
		const addressDgilLm = accounts[3]
		const uintU8s36fE = BigInt("1947")
		const addressTj0hmKq = accounts[2]
//		const addresscKAwiDW = await LUP9UQFHr.notFrozen.call(address6L0xyU, {from: accounts[4]});
//		const booloz1LnX = await LUP9UQFHr.lock.call(addressDgilLm, uintkyWx96o, uintOd9wIQx, {from: accounts[3]});
//		const boolfUDH0RI = await LUP9UQFHr.unlock.call(addressTj0hmKq, uintU8s36fE, {from: accounts[3]});
//		const stringFYrauX = await LUP9UQFHr.symbol.call({from: accounts[4]});
//		const uint8zOb69cK = await LUP9UQFHr.decimals.call({from: accounts[1]});

		await expect(LUP9UQFHr.notFrozen.call(address6L0xyU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPqcjTr66 = await LUP.new({from: accounts[3]});
		const uintM4GlTHl = BigInt("1389")
		const addressVw0cyXd = accounts[2]
		const uinttkQzYdI = BigInt("1185")
		const uintc9o1WGb = BigInt("1856")
		const addressmFnokgv = accounts[5]
		const uintTILrcJD = BigInt("1007")
		const addressfOfqjV = accounts[0]
		const uint8BTm4VOC = await LUPqcjTr66.decimals.call({from: accounts[3]});
		const boolbUWxSWh = await LUPqcjTr66.transfer.call(addressVw0cyXd, uintM4GlTHl, {from: accounts[3]});
		const boolCor99ra = await LUPqcjTr66.transferWithLock.call(addressmFnokgv, uintc9o1WGb, uinttkQzYdI, {from: accounts[3]});
//		const boolr08aT12 = await LUPqcjTr66.transfer.call(addressfOfqjV, uintTILrcJD, {from: accounts[1]});

		assert.equal(boolCor99ra, true)
		assert.equal(boolbUWxSWh, true)
		assert.equal(uint8BTm4VOC, BigInt("18"))
		await expect(LUPqcjTr66.transfer.call(addressfOfqjV, uintTILrcJD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringRZ3keI7 = "dPLlF4qFqB6"
		const string9JxnwI = "SJbMejHs4udTd4zNexlvslruH8HoSmLotL6qoomyEg7JITAuMXHQDitb4W2o9yldt7L5GkBVR"
		const uinti6Of45 = BigInt("120")
		const LUPZl7nZo2 = await LUP.new(stringRZ3keI7, string9JxnwI, uinti6Of45, {from: accounts[2]});
		const addressz5yuCEy = accounts[2]
		const uintXQYsTFK = BigInt("328")
		const addressrFpJQ7 = accounts[3]
		const uint8ab6AjdI = await LUPZl7nZo2.decimals.call({from: accounts[1]});
		const stringi81H61x = await LUPZl7nZo2.symbol.call({from: accounts[4]});
		const addressh9r4ow3 = await LUPZl7nZo2.notFrozen.call(addressz5yuCEy, {from: accounts[0]});
		const uint8m2v8xc2 = await LUPZl7nZo2.decimals.call({from: accounts[3]});
		const boolgwinMot = await LUPZl7nZo2.transfer.call(addressrFpJQ7, uintXQYsTFK, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const uintD0lBtkc = BigInt("2013")
		const addressjsUDcAP = accounts[3]
		const uintH8XEocd = BigInt("1595")
		const addressBuzbF0T = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
		const stringtVbxw4v = await LUPY1qmCKU.symbol.call({from: accounts[0]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addressjsUDcAP, uintD0lBtkc, {from: accounts[4]});
//		const uint8VzqK85V = await LUPY1qmCKU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressBuzbF0T, uintH8XEocd, {from: accounts[3]});

		assert.equal(stringHRiAzwJ, "LINKUP Token")
		assert.equal(stringtVbxw4v, "LUP")
		await expect(LUPY1qmCKU.transfer.call(addressjsUDcAP, uintD0lBtkc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const uintIxeNufy = BigInt("474")
		const addressLc6ks2g = accounts[1]
		const uintMqwpoIy = BigInt("2013")
		const addressCRouaZy = accounts[3]
		const uintrPMLWnk = BigInt("1595")
		const addressAg0PFzu = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
//		const boolKbEmmq2 = await LUPY1qmCKU.unlock.call(addressLc6ks2g, uintIxeNufy, {from: accounts[2]});
//		const stringtVbxw4v = await LUPY1qmCKU.symbol.call({from: accounts[0]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addressCRouaZy, uintMqwpoIy, {from: accounts[4]});
//		const uint8VzqK85V = await LUPY1qmCKU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressAg0PFzu, uintrPMLWnk, {from: accounts[3]});

		assert.equal(stringHRiAzwJ, "LINKUP Token")
		await expect(LUPY1qmCKU.unlock.call(addressLc6ks2g, uintIxeNufy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const addressYU1TNkp = accounts[0]
		const uintlxYDWMk = BigInt("2013")
		const addressw77DjQ4 = accounts[3]
		const addressJcTJ7Qs = accounts[4]
		const uintNsYGv3u = BigInt("1595")
		const addressW7MqcF = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
		const uint256dj5MU7x = await LUPY1qmCKU.balanceOf.call(addressYU1TNkp, {from: accounts[1]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addressw77DjQ4, uintlxYDWMk, {from: accounts[4]});
//		const addressy8lSiFP = await LUPY1qmCKU.upgradeTo.call(addressJcTJ7Qs, {from: accounts[2]});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressW7MqcF, uintNsYGv3u, {from: accounts[3]});

		assert.equal(stringHRiAzwJ, "LINKUP Token")
		assert.equal(uint256dj5MU7x, BigInt("0"))
		await expect(LUPY1qmCKU.transfer.call(addressw77DjQ4, uintlxYDWMk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const uintzM3ceIl = BigInt("1024")
		const uinte0rEN1 = BigInt("832")
		const addressApksqsU = accounts[1]
		const addresscLkEfQc = accounts[2]
		const uinthUsKrGw = BigInt("474")
		const addressm39677 = accounts[1]
		const uinteePQgS = BigInt("2013")
		const addressVdpGli7 = accounts[4]
		const uintJlxHGBo = BigInt("1595")
		const addressXUgiXQc = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
//		const boolVE1XC9v = await LUPY1qmCKU.lock.call(addressApksqsU, uinte0rEN1, uintzM3ceIl, {from: accounts[2]});
//		const uint256BcVh6Db = await LUPY1qmCKU.balanceOf.call(addresscLkEfQc, {from: accounts[0]});
//		const boolKbEmmq2 = await LUPY1qmCKU.unlock.call(addressm39677, uinthUsKrGw, {from: accounts[2]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addressVdpGli7, uinteePQgS, {from: accounts[4]});
//		const uint8VzqK85V = await LUPY1qmCKU.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressXUgiXQc, uintJlxHGBo, {from: accounts[3]});

		assert.equal(stringHRiAzwJ, "LINKUP Token")
		await expect(LUPY1qmCKU.lock.call(addressApksqsU, uinte0rEN1, uintzM3ceIl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPNlOdD7U = await LUP.new({from: accounts[5]});
		const addressRhOzzr5 = accounts[5]
		const uintD6wJVa3 = BigInt("1943")
		const uintDEI2SaN = BigInt("942")
		const addressd6lXB8 = accounts[0]
		const addressjHCW0L = await LUPNlOdD7U.upgradeTo.call(addressRhOzzr5, {from: accounts[5]});
//		const boolkOH5ZfM = await LUPNlOdD7U.lock.call(addressd6lXB8, uintDEI2SaN, uintD6wJVa3, {from: accounts[1]});

		await expect(LUPNlOdD7U.lock.call(addressd6lXB8, uintDEI2SaN, uintD6wJVa3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPR4cwQQ = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const boolIR6SzFW = false
		const addresssdEdHFZ = accounts[2]
		const addressLm7OKmM = accounts[0]
		const boolsjSIYFK = false
		const addressH6gaYk = accounts[3]
		const booljVVS3Ei = await LUPR4cwQQ.freezeAccount.call(addresssdEdHFZ, boolIR6SzFW, {from: accounts[3]});
		const addressthR8QIh = await LUPR4cwQQ.notFrozen.call(addressLm7OKmM, {from: accounts[1]});
		const boolZ5WfMaf = await LUPR4cwQQ.freezeAccount.call(addressH6gaYk, boolsjSIYFK, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPY1qmCKU = await LUP.new({from: accounts[2]});
		const uintGfrllNs = BigInt("1024")
		const uintMsmGKo = BigInt("832")
		const addressTlzSI6J = accounts[2]
		const addressPSskgKx = accounts[2]
		const uintuuGV7yy = BigInt("577")
		const addressQNENmLt = accounts[2]
		const uintezdOiAw = BigInt("203")
		const addressriDeXYF = accounts[1]
		const uintaBygmG = BigInt("107")
		const uintqM27a3T = BigInt("1572")
		const addressVR5zPfs = accounts[3]
		const uintmqCkb1Q = BigInt("220")
		const addresstyVO9I = accounts[2]
		const uintq0kMMQj = BigInt("2013")
		const addressztQ8ONg = accounts[4]
		const addresswo9Qts = accounts[6]
		const uintjIXv38 = BigInt("1595")
		const addressJGypwfw = accounts[4]
		const stringHRiAzwJ = await LUPY1qmCKU.name.call({from: accounts[4]});
		const boolVE1XC9v = await LUPY1qmCKU.lock.call(addressTlzSI6J, uintMsmGKo, uintGfrllNs, {from: accounts[2]});
		const uint256BcVh6Db = await LUPY1qmCKU.balanceOf.call(addressPSskgKx, {from: accounts[0]});
//		const boolu3T84SR = await LUPY1qmCKU.unlock.call(addressQNENmLt, uintuuGV7yy, {from: accounts[5]});
//		const boolKbEmmq2 = await LUPY1qmCKU.unlock.call(addressriDeXYF, uintezdOiAw, {from: accounts[2]});
//		const stringeHZdSPT = await LUPY1qmCKU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolpuMTcav = await LUPY1qmCKU.transferWithLock.call(addressVR5zPfs, uintqM27a3T, uintaBygmG, {from: accounts[5]});
//		const boolPpfJWEp = await LUPY1qmCKU.unlock.call(addresstyVO9I, uintmqCkb1Q, {from: accounts[3]});
//		const boolNavnPe0 = await LUPY1qmCKU.transfer.call(addressztQ8ONg, uintq0kMMQj, {from: accounts[4]});
//		const uint256Q9I1HxQ = await LUPY1qmCKU.balanceOf.call(addresswo9Qts, {from: accounts[2]});
//		const boolinMLKSZ = await LUPY1qmCKU.unlock.call(addressJGypwfw, uintjIXv38, {from: accounts[3]});

		assert.equal(boolVE1XC9v, true)
		assert.equal(stringHRiAzwJ, "LINKUP Token")
		assert.equal(uint256BcVh6Db, BigInt("50000000000000000000000000"))
		await expect(LUPY1qmCKU.unlock.call(addressQNENmLt, uintuuGV7yy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPwT5rTW = await LUP.new({from: accounts[1]});
		const boolhzQzQxY = false
		const addressaomzGiD = accounts[0]
		const addressWebN3h6 = accounts[1]
		const addressQE5ymg0 = accounts[4]
		const addressIEqdnw = accounts[4]
		const boolit7cGNA = await LUPwT5rTW.freezeAccount.call(addressaomzGiD, boolhzQzQxY, {from: accounts[1]});
		const stringHGtTGbx = await LUPwT5rTW.name.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbN02QuF = await LUPwT5rTW.upgradeTo.call(addressWebN3h6, {from: accounts[1]});
		const uint256IxaBug = await LUPwT5rTW.balanceOf.call(addressQE5ymg0, {from: "0x0000000000000000000000000000000000000001"});
		const uint8q3R2yeI = await LUPwT5rTW.decimals.call({from: accounts[1]});
		const uint256rjcG5BS = await LUPwT5rTW.balanceOf.call(addressIEqdnw, {from: accounts[0]});

		assert.equal(boolit7cGNA, true)
		assert.equal(stringHGtTGbx, "LINKUP Token")
		assert.equal(uint256IxaBug, BigInt("0"))
		assert.equal(uint256rjcG5BS, BigInt("0"))
		assert.equal(uint8q3R2yeI, BigInt("18"))
	});
})