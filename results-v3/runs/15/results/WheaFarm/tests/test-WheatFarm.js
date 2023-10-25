const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringbpfWdO = "uqf8X9R9PeXmzAOyIf3Cxa87tvAFf6D1Wm0zfbo"
		const string43DIqg = "ZaSegHw5KoOOzmpjpb6bNjL4MEpGoGiAQKJdSJDpVnVwYNy9YczQTTcXAXaZQ23lfBvAJjMUnx4rGy5p4P5XS5Y"
		const uintSgtqHcx = BigInt("100")
		const WheatFarmDxF3UdG = await WheatFarm.new(stringbpfWdO, string43DIqg, uintSgtqHcx, {from: accounts[3]});
		const addressKrn0mg = accounts[3]
		const uintw4S7wqy = BigInt("1372")
		const addressGK68PRo = accounts[1]
		const stringEGYLC6 = await WheatFarmDxF3UdG.symbol.call({from: accounts[5]});
		const uintGeOQ9Gw = await WheatFarmDxF3UdG.balanceOf.call(addressKrn0mg, {from: accounts[2]});
		const boolj1ZUdKV = await WheatFarmDxF3UdG.transfer.call(addressGK68PRo, uintw4S7wqy, {from: accounts[4]});
		const stringJbTF29 = await WheatFarmDxF3UdG.name.call({from: accounts[0]});

		assert.equal(stringEGYLC6, "ZaSegHw5KoOOzmpjpb6bNjL4MEpGoGiAQKJdSJDpVnVwYNy9YczQTTcXAXaZQ23lfBvAJjMUnx4rGy5p4P5XS5Y")
		assert.equal(uintGeOQ9Gw, BigInt("100000000000000000000"))
		await expect(WheatFarmDxF3UdG.transfer.call(addressGK68PRo, uintw4S7wqy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringskJcb8e = "oLrAVNJJIsNNGiksMEJFxBEHo4qfTdynldCNhqmDcxQ9q9Oyn37zVCuL234K5U2qgb4xs"
		const stringJVHbVyr = "4NS8mymyMNAdImwpQ77pjmFiyqiJU"
		const uintZtkTWoJ = BigInt("185")
		const WheatFarmuxneVFh = await WheatFarm.new(stringskJcb8e, stringJVHbVyr, uintZtkTWoJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressrrMR1yD = accounts[3]
		const address0slA1A = accounts[0]
		const stringJmBifVJ = await WheatFarmuxneVFh.name.call({from: accounts[0]});
		const uintPFsrgHE = await WheatFarmuxneVFh.allowance.call(address0slA1A, addressrrMR1yD, {from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringx9X7dBE = "8Ziwe4fk3lgqYjxK3WLG9lPft0Kxc5SsQasZxSLihKzzPngalBmjrpcrPTU"
		const stringN9o16cD = "5wPp4VNCFaKgScNhtlOAktZ0OsQ3ISrabu6232z"
		const uintdfo6vPP = BigInt("148")
		const WheatFarmDH6RXBb = await WheatFarm.new(stringx9X7dBE, stringN9o16cD, uintdfo6vPP, {from: accounts[1]});
		const uintTPRdKfH = BigInt("375")
		const addressz9mMwwU = accounts[0]
		const uintihlZ0hf = BigInt("1316")
		const addressnyFA1en = accounts[4]
		const boolMJ0mLoq = await WheatFarmDH6RXBb.approve.call(addressz9mMwwU, uintTPRdKfH, {from: accounts[0]});
		const boolcfgiPIK = await WheatFarmDH6RXBb.transfer.call(addressnyFA1en, uintihlZ0hf, {from: accounts[3]});

		assert.equal(boolMJ0mLoq, true)
		await expect(WheatFarmDH6RXBb.transfer.call(addressnyFA1en, uintihlZ0hf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCNARtid = "Gu6xMZljlqzUYuoWwNvYMhEyv68cIYUCo5Y72KAJ7R1dz"
		const stringDsVKMAb = "c6Jvq069g5bDN"
		const uintMH15z5T = BigInt("1320")
		const WheatFarmimzUJ1m = await WheatFarm.new(stringCNARtid, stringDsVKMAb, uintMH15z5T, {from: accounts[4]});
		const uintODQ9B6I = BigInt("1348")
		const addressEJkx1YO = accounts[1]
		const uintXyCf0XM = BigInt("1083")
		const addressYXi5S5m = accounts[0]
		const uintGUwutbq = await WheatFarmimzUJ1m.totalSupply.call({from: accounts[3]});
		const boolWSwEZLQ = await WheatFarmimzUJ1m.approveAndCall.call(addressEJkx1YO, uintODQ9B6I, {from: accounts[2]});
		const boolL4A3mbQ = await WheatFarmimzUJ1m.approve.call(addressYXi5S5m, uintXyCf0XM, {from: accounts[4]});

		assert.equal(uintGUwutbq, BigInt("1320000000000000000000"))
		await expect(WheatFarmimzUJ1m.approveAndCall.call(addressEJkx1YO, uintODQ9B6I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringp3UVInK = "hcGkgWt9W6kP9yR6u1zQQEBmKEnNI2w"
		const stringC7H0qxB = "5tOofvmTxB2qxl16MudeKEYf7aLeSWfRuhdTeoCcnd9MEyDc3jzwHU4DC"
		const uintMqT5bTH = BigInt("158")
		const WheatFarmqxvt0C = await WheatFarm.new(stringp3UVInK, stringC7H0qxB, uintMqT5bTH, {from: accounts[3]});
		const uintldnBaMC = BigInt("2008")
		const addressKK08dsJ = accounts[4]
		const uintYgAlbK1 = BigInt("43")
		const addressUftcJO = accounts[3]
		const addressrWoezy9 = "0x0000000000000000000000000000000000000001"
		const addressDho1kCy = accounts[2]
		const boolhBJMAjU = await WheatFarmqxvt0C.decreaseAllowance.call(addressKK08dsJ, uintldnBaMC, {from: accounts[3]});
		const boolzGgjJU6 = await WheatFarmqxvt0C.approveAndCall.call(addressUftcJO, uintYgAlbK1, {from: accounts[1]});
		const uintygB91nW = await WheatFarmqxvt0C.allowance.call(addressDho1kCy, addressrWoezy9, {from: accounts[2]});

		await expect(WheatFarmqxvt0C.decreaseAllowance.call(addressKK08dsJ, uintldnBaMC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringKuGjkc = "ZRIykXKAWwdLJVHgTiciCbEsigQ8"
		const stringZ3cFKrp = "HnQgsBSlPz0yFXf73M5ox6ttDdKHIfmljwg1nKiDjgjABcEYXl1N9ldb9sWWuqOH13kxIfoJMJuawujpms2rVvp"
		const uintw3O5fF = BigInt("1501")
		const WheatFarmxaDRWZB = await WheatFarm.new(stringKuGjkc, stringZ3cFKrp, uintw3O5fF, {from: accounts[4]});
		const addressNt3ijLO = accounts[2]
		const addressmhFcw6s = accounts[5]
		const uintWOKOlLC = BigInt("1725")
		const addressBqjC7Px = "0x0000000000000000000000000000000000000001"
		const addressyYlVwut = accounts[2]
		const uintU7b9Oga = BigInt("1187")
		const addressLxuus11 = accounts[2]
		const addressP3VJlay = accounts[0]
		const boolRL71CNr = await WheatFarmxaDRWZB.transferownership.call(addressNt3ijLO, {from: accounts[4]});
		const boolbkkp0DU = await WheatFarmxaDRWZB.transferownership.call(addressmhFcw6s, {from: accounts[2]});
		const boolgfyNukp = await WheatFarmxaDRWZB.transferFrom.call(addressyYlVwut, addressBqjC7Px, uintWOKOlLC, {from: accounts[2]});
		const boolTckWdpc = await WheatFarmxaDRWZB.transfer.call(addressLxuus11, uintU7b9Oga, {from: accounts[1]});
		const boolwsSvbLK = await WheatFarmxaDRWZB.transferownership.call(addressP3VJlay, {from: accounts[1]});

		assert.equal(boolRL71CNr, true)
		await expect(WheatFarmxaDRWZB.transferownership.call(addressmhFcw6s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringDgfaH4z = "BDypY8GnYgROQfWaP"
		const stringBLKFIJi = "ZfwRGhA8tu"
		const uint5aSws2 = BigInt("924")
		const WheatFarmjvwg8ci = await WheatFarm.new(stringDgfaH4z, stringBLKFIJi, uint5aSws2, {from: accounts[1]});
		const uintLPsw1M = BigInt("196")
		const addressx1ouvM = accounts[0]
		const uintm7Qaztc = BigInt("1457")
		const addressJEDr4aU = accounts[1]
		const boolMFOXwKb = await WheatFarmjvwg8ci.approve.call(addressx1ouvM, uintLPsw1M, {from: accounts[0]});
		const boolWKvV8Ds = await WheatFarmjvwg8ci.transfer.call(addressJEDr4aU, uintm7Qaztc, {from: accounts[4]});

		assert.equal(boolMFOXwKb, true)
		await expect(WheatFarmjvwg8ci.transfer.call(addressJEDr4aU, uintm7Qaztc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringCNARtid = "Gu6xMZljlqzUYuoWwNvYMhEyv68cIYUCo5Y72KAJ7R1dz"
		const stringDsVKMAb = "c6Jvq069g5bDN"
		const uintbsJEmiO = BigInt("1320")
		const WheatFarmimzUJ1m = await WheatFarm.new(stringCNARtid, stringDsVKMAb, uintbsJEmiO, {from: accounts[4]});
		const uintsewKCvB = BigInt("834")
		const addressTbK2bJm = accounts[2]
		const uintDdiVef = BigInt("339")
		const addressf6TL608 = accounts[2]
		const uintgBGBWT3 = BigInt("164")
		const addressa5SUlJ = accounts[5]
		const addressH0EnxqP = accounts[5]
		const uintLsR9nf = BigInt("1746")
		const addressQdpoY1f = accounts[4]
		const addressUdxpZqu = accounts[2]
		const uintHcEcmqX = BigInt("1083")
		const addressf2AN2r6 = accounts[0]
		const uintGUwutbq = await WheatFarmimzUJ1m.totalSupply.call({from: accounts[3]});
		const booleV1sQa0 = await WheatFarmimzUJ1m.approveAndCall.call(addressTbK2bJm, uintsewKCvB, {from: accounts[4]});
		const boolmSp8A6V = await WheatFarmimzUJ1m.transfer.call(addressf6TL608, uintDdiVef, {from: accounts[0]});
		const boolrI2tBdp = await WheatFarmimzUJ1m.transferFrom.call(addressH0EnxqP, addressa5SUlJ, uintgBGBWT3, {from: accounts[0]});
		const boolbRIDR3j = await WheatFarmimzUJ1m.transferFrom.call(addressUdxpZqu, addressQdpoY1f, uintLsR9nf, {from: accounts[4]});
		const boolL4A3mbQ = await WheatFarmimzUJ1m.approve.call(addressf2AN2r6, uintHcEcmqX, {from: accounts[4]});

		assert.equal(booleV1sQa0, true)
		assert.equal(uintGUwutbq, BigInt("1320000000000000000000"))
		await expect(WheatFarmimzUJ1m.transfer.call(addressf6TL608, uintDdiVef, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringIwJXbT3 = "hymeERPFoKOSrlDG9SQIYwLj2oonm3iw"
		const stringLQ4QLYj = "J1pvYtBJ8r2oON9GS7DEoLL1MGAT3bwCEQWR6Gntf"
		const uintzosCzg4 = BigInt("1098")
		const WheatFarmXZiI3LI = await WheatFarm.new(stringIwJXbT3, stringLQ4QLYj, uintzosCzg4, {from: accounts[4]});
		const uintKssTshH = BigInt("1491")
		const addressSeTeuhc = accounts[2]
		const uintXlKH1JL = BigInt("1058")
		const addressg7PXdy = accounts[2]
		const uintbr75uCm = BigInt("0")
		const addressMHSYOkY = accounts[0]
		const addressYNkq9Cf = accounts[2]
		const addressZRUXfOr = accounts[5]
		const uintghvYvYv = BigInt("119")
		const address8wONyu = accounts[0]
		const boolEaQoaw = await WheatFarmXZiI3LI.approve.call(addressSeTeuhc, uintKssTshH, {from: accounts[5]});
		const boolw1YB3x = await WheatFarmXZiI3LI.approve.call(addressg7PXdy, uintXlKH1JL, {from: accounts[0]});
		const boolGvjaH0e = await WheatFarmXZiI3LI.transferFrom.call(addressYNkq9Cf, addressMHSYOkY, uintbr75uCm, {from: accounts[1]});
		const uintaKuN8sQ = await WheatFarmXZiI3LI.balanceOf.call(addressZRUXfOr, {from: "0x0000000000000000000000000000000000000001"});
		const boolyxC0muk = await WheatFarmXZiI3LI.increaseAllowance.call(address8wONyu, uintghvYvYv, {from: accounts[0]});

		assert.equal(boolEaQoaw, true)
		assert.equal(boolGvjaH0e, true)
		assert.equal(boolw1YB3x, true)
		assert.equal(uintaKuN8sQ, BigInt("0"))
		await expect(WheatFarmXZiI3LI.increaseAllowance.call(address8wONyu, uintghvYvYv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})