const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairko9xPQL = await PlasmaswapPair.new({from: accounts[2]});
		const addressBUe5ng1 = accounts[5]
		const addressvDqtZZu = accounts[4]
		const addresse2ZwFL = "0x0000000000000000000000000000000000000001"
		const addressQeSMKJh = accounts[2]
		const addressQW61x1 = accounts[4]
		const uintIWv2G8W = await PlasmaswapPairko9xPQL.mint.call(addressBUe5ng1, {from: accounts[3]});
		const uintP9584EY = await PlasmaswapPairko9xPQL.burn.call(addressvDqtZZu, {from: accounts[2]});
		const addresspjhA12o = await PlasmaswapPairko9xPQL.skim.call(addresse2ZwFL, {from: accounts[2]});
		const addresstC7rL6 = await PlasmaswapPairko9xPQL.initialize.call(addressQW61x1, addressQeSMKJh, {from: accounts[4]});

		await expect(PlasmaswapPairko9xPQL.mint.call(addressBUe5ng1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPaird5RCS3t = await PlasmaswapPair.new({from: accounts[1]});
		const addressPhs4wyf = accounts[3]
		const addressxnBT2e = accounts[2]
		const addressC8kqMPw = accounts[2]
		const addressP3Eocx = accounts[1]
		await PlasmaswapPaird5RCS3t.lock.call({from: accounts[5]});
		const uintiOwnbkP = await PlasmaswapPaird5RCS3t.burn.call(addressPhs4wyf, {from: accounts[3]});
		const addressj7TsZby = await PlasmaswapPaird5RCS3t.initialize.call(addressC8kqMPw, addressxnBT2e, {from: accounts[2]});
		const addresspJ98Mdu = await PlasmaswapPaird5RCS3t.skim.call(addressP3Eocx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPaird5RCS3t.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjbnkLjQ = await PlasmaswapPair.new({from: accounts[1]});
		const addressoNEvjdE = accounts[5]
		const addressiWqQl6 = accounts[3]
		const bytecZ8iWcw = "0x03051e08090b0b0a0e0b140203"
		const addressokQvTAU = accounts[1]
		const uintOWN5QiX = BigInt("1934")
		const uintO2QIXzT = BigInt("156")
		const addressWyljEjN = accounts[3]
		const addresswBWsByM = accounts[0]
		const uintoqmRwjO = await PlasmaswapPairjbnkLjQ.burn.call(addressoNEvjdE, {from: accounts[1]});
		const uintvgESuiA = await PlasmaswapPairjbnkLjQ.burn.call(addressiWqQl6, {from: accounts[5]});
		await PlasmaswapPairjbnkLjQ.sync.call({from: "0x0000000000000000000000000000000000000001"});
		const uintjh5eX9k = await PlasmaswapPairjbnkLjQ.swap.call(uintO2QIXzT, uintOWN5QiX, addressokQvTAU, bytecZ8iWcw, {from: accounts[2]});
		const uintDFULxL9 = await PlasmaswapPairjbnkLjQ.mint.call(addressWyljEjN, {from: accounts[1]});
		const addresscuLuGz = await PlasmaswapPairjbnkLjQ.skim.call(addresswBWsByM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairjbnkLjQ.burn.call(addressoNEvjdE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairPTFMk9g = await PlasmaswapPair.new({from: accounts[1]});
		const addresshTPnQTv = accounts[4]
		const addressNtjYqV2 = accounts[1]
		const addressCH9AM7e = accounts[0]
		const addressv4WH47E = accounts[0]
		const addresshjClIeq = accounts[2]
		const addressCEoLXb = accounts[2]
		const addressZAPj4lf = await PlasmaswapPairPTFMk9g.initialize.call(addressNtjYqV2, addresshTPnQTv, {from: accounts[2]});
		const uint112uMO5P5H = await PlasmaswapPairPTFMk9g.getReserves.call({from: accounts[3]});
		const uintOsAsENc = await PlasmaswapPairPTFMk9g.mint.call(addressCH9AM7e, {from: accounts[2]});
		const addressEbfvc3W = await PlasmaswapPairPTFMk9g.initialize.call(addresshjClIeq, addressv4WH47E, {from: accounts[1]});
		const uintzXNqccm = await PlasmaswapPairPTFMk9g.mint.call(addressCEoLXb, {from: accounts[5]});

		await expect(PlasmaswapPairPTFMk9g.initialize.call(addressNtjYqV2, addresshTPnQTv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairyxCuke = await PlasmaswapPair.new({from: accounts[1]});
		const addressyItmUJ4 = accounts[3]
		const addressnlezLW9 = accounts[3]
		const addressz25wAsX = accounts[2]
		const addressdntoISp = await PlasmaswapPairyxCuke.skim.call(addressyItmUJ4, {from: accounts[3]});
		const uinthLEW8cy = await PlasmaswapPairyxCuke.mint.call(addressnlezLW9, {from: accounts[0]});
		const uintFN5DszV = await PlasmaswapPairyxCuke.burn.call(addressz25wAsX, {from: accounts[2]});
		await PlasmaswapPairyxCuke.sync.call({from: accounts[5]});

		await expect(PlasmaswapPairyxCuke.skim.call(addressyItmUJ4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairXsORzix = await PlasmaswapPair.new({from: accounts[4]});
		const byteVFjIiWH = "0x10100c1220031c0e0d0c031303060905040e20"
		const addressH9oyU84 = accounts[2]
		const uintZCTABEC = BigInt("633")
		const uintxN0uw4S = BigInt("1171")
		const addressCIayMnS = accounts[0]
		const addressGloK63W = accounts[4]
		const addressf9c5tIb = accounts[2]
		const addressk5Hz8o = accounts[5]
		const uintbLyKvzQ = await PlasmaswapPairXsORzix.swap.call(uintxN0uw4S, uintZCTABEC, addressH9oyU84, byteVFjIiWH, {from: "0x0000000000000000000000000000000000000001"});
		const addressrAFZcCn = await PlasmaswapPairXsORzix.initialize.call(addressGloK63W, addressCIayMnS, {from: accounts[3]});
		const addresswycxZ7N = await PlasmaswapPairXsORzix.skim.call(addressf9c5tIb, {from: accounts[1]});
		const addressq7NMi16 = await PlasmaswapPairXsORzix.skim.call(addressk5Hz8o, {from: accounts[4]});

		await expect(PlasmaswapPairXsORzix.swap.call(uintxN0uw4S, uintZCTABEC, addressH9oyU84, byteVFjIiWH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairt6iWYR = await PlasmaswapPair.new({from: accounts[3]});
		const addressqvfRqgc = accounts[0]
		const addressHk6z7l = accounts[5]
		await PlasmaswapPairt6iWYR.sync.call({from: accounts[3]});
		const uintRDswHxp = await PlasmaswapPairt6iWYR.burn.call(addressqvfRqgc, {from: accounts[3]});
		const uintEeEMQc7 = await PlasmaswapPairt6iWYR.burn.call(addressHk6z7l, {from: accounts[3]});

		await expect(PlasmaswapPairt6iWYR.sync.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZw79mKK = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const bytefGWKGAq = "0x1b180a000f1b1a1c1a0e0e011d201705091d17140a0b"
		const addressXPK8Ab = accounts[2]
		const uintsr1s0SH = BigInt("233")
		const uintb5IqUQ6 = BigInt("1707")
		const addressady7aB = accounts[4]
		const addressaxNkDyZ = accounts[0]
		const addresslRactp = accounts[3]
		const addresspVKzSct = accounts[3]
		const uint112dGPUUDu = await PlasmaswapPairZw79mKK.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uintZs8W6q = await PlasmaswapPairZw79mKK.swap.call(uintb5IqUQ6, uintsr1s0SH, addressXPK8Ab, bytefGWKGAq, {from: accounts[3]});
		const addresshTy1gfP = await PlasmaswapPairZw79mKK.skim.call(addressady7aB, {from: accounts[5]});
		const addressmefrE2M = await PlasmaswapPairZw79mKK.initialize.call(addresslRactp, addressaxNkDyZ, {from: "0x0000000000000000000000000000000000000001"});
		const address3EsNGf = await PlasmaswapPairZw79mKK.skim.call(addresspVKzSct, {from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairjbnkLjQ = await PlasmaswapPair.new({from: accounts[1]});
		const addressP47Qk6w = "0x00000000000000000000000000000000000000-1"
		const addressHt6EiKZ = await PlasmaswapPairjbnkLjQ.skim.call(addressP47Qk6w, {from: accounts[1]});

		await expect(PlasmaswapPairjbnkLjQ.skim.call(addressP47Qk6w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})