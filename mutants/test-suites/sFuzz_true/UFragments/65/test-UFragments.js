const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsB25uH3A = await UFragments.new({from: accounts[4]});
		const intaMQ6rkC = BigInt("150")
		const intj6h465E = BigInt("1308")
		const uintdOGSiIq = BigInt("175")
		const stringHhBaUNq = "zsFX9478hDNdvr4dEmJghcdf1ns34mlQWdKYOnScuWWq8gQyxb6ZJ1uJJzNbif"
		const stringTCsGs0v = "RQAFOsl5e58XRX1NU0"
//		const int256eO9tOqa = await UFragmentsB25uH3A.div.call(intj6h465E, intaMQ6rkC, {from: accounts[2]});
//		const stringbBjJI23 = await UFragmentsB25uH3A.initialize.call(stringTCsGs0v, stringHhBaUNq, uintdOGSiIq, {from: accounts[5]});
//		const stringXsxXe8O = await UFragmentsB25uH3A.name.call({from: accounts[4]});

		await expect(UFragmentsB25uH3A.div.call(intj6h465E, intaMQ6rkC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const inty54DL84 = BigInt("-1733")
		const intpiHwHlr = BigInt("-457")
		const boolSdf6IVT = await UFragmentsnGjJ0Z4.rebaseTimeInfo.call({from: accounts[2]});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(intpiHwHlr, inty54DL84, {from: accounts[1]});

		await expect(UFragmentsnGjJ0Z4.div.call(intpiHwHlr, inty54DL84, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentssTX4Uw = await UFragments.new({from: accounts[4]});
		const uintSixJp1z = BigInt("754")
		const addressgybZfMZ = accounts[2]
//		const addressbH3pn8j = await UFragmentssTX4Uw.initRebase.call(addressgybZfMZ, uintSixJp1z, {from: "0x0000000000000000000000000000000000000001"});
//		const stringtrPZ9b2 = await UFragmentssTX4Uw.name.call({from: accounts[4]});

		await expect(UFragmentssTX4Uw.initRebase.call(addressgybZfMZ, uintSixJp1z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTrgunQC = await UFragments.new({from: accounts[1]});
		const uinthNOuOL9 = BigInt("873")
		const addressG9Dc5dk = accounts[3]
		const addressY88pMGW = accounts[3]
//		const booldKJCAb6 = await UFragmentsTrgunQC.transfer.call(addressG9Dc5dk, uinthNOuOL9, {from: accounts[0]});
//		const addressQPvVBWc = await UFragmentsTrgunQC.owner.call({from: accounts[2]});
//		const addressFyljmF = await UFragmentsTrgunQC.transferOwnership.call(addressY88pMGW, {from: accounts[0]});
//		const uint8XioEAmS = await UFragmentsTrgunQC.decimals.call({from: accounts[0]});

		await expect(UFragmentsTrgunQC.transfer.call(addressG9Dc5dk, uinthNOuOL9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmm0Wd6H = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressi1E8PzE = accounts[3]
		const uintlJvJoFk = BigInt("163")
		const stringR5i0o0m = "ScObS9LQmnXkMufksuF9NRp7D8hpDsodpeE8vr5Nfd"
		const stringsv8N0jm = "17LzNsJCtQayHF"
		const address8voJL5 = accounts[3]
		const uint256jlptONs = await UFragmentsmm0Wd6H.balanceOf.call(addressi1E8PzE, {from: accounts[4]});
		const uint256BrBHaZe = await UFragmentsmm0Wd6H.calRebase.call({from: accounts[0]});
		const stringDu4If76 = await UFragmentsmm0Wd6H.initialize.call(stringsv8N0jm, stringR5i0o0m, uintlJvJoFk, {from: accounts[3]});
		const uint256LJ8yAW0 = await UFragmentsmm0Wd6H.totalSupply.call({from: accounts[0]});
		const addressLSq40BT = await UFragmentsmm0Wd6H.initialize.call(address8voJL5, {from: accounts[0]});
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const addresscZmtqpH = accounts[3]
		const addressXHYNWnf = accounts[2]
		const intBW30oyq = BigInt("-1733")
		const intkKRbue = BigInt("-457")
		const boolSdf6IVT = await UFragmentsnGjJ0Z4.rebaseTimeInfo.call({from: accounts[2]});
		const uint256OszUlU = await UFragmentsnGjJ0Z4.allowance.call(addressXHYNWnf, addresscZmtqpH, {from: accounts[1]});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(intkKRbue, intBW30oyq, {from: accounts[1]});

		assert.equal(uint256OszUlU, BigInt("0"))
		await expect(UFragmentsnGjJ0Z4.div.call(intkKRbue, intBW30oyq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNIXEAZ = await UFragments.new({from: accounts[0]});
		const addressFlZND2B = accounts[4]
//		const addressDW8NuAq = await UFragmentsNIXEAZ.initialize.call(addressFlZND2B, {from: accounts[5]});
//		const stringz8IkpF9 = await UFragmentsNIXEAZ.symbol.call({from: accounts[0]});
//		const stringSA1gaXp = await UFragmentsNIXEAZ.symbol.call({from: accounts[2]});
//		const uint256bvRhKj = await UFragmentsNIXEAZ.totalSupply.call({from: accounts[5]});

		await expect(UFragmentsNIXEAZ.initialize.call(addressFlZND2B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTrgunQC = await UFragments.new({from: accounts[1]});
		const addressbyxBXhn = accounts[3]
		const addressQPvVBWc = await UFragmentsTrgunQC.owner.call({from: accounts[2]});
//		const addressFyljmF = await UFragmentsTrgunQC.transferOwnership.call(addressbyxBXhn, {from: accounts[0]});

		assert.equal(addressQPvVBWc, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsTrgunQC.transferOwnership.call(addressbyxBXhn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const intjkThXQa = BigInt("-686")
		const intdIk0Wf = BigInt("-457")
//		const uint256EHtHu3 = await UFragmentsnGjJ0Z4.calRebase.call({from: accounts[1]});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(intdIk0Wf, intjkThXQa, {from: accounts[1]});

		await expect(UFragmentsnGjJ0Z4.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsBxfXY1J = await UFragments.new({from: accounts[5]});
		const intHOUqC0b = BigInt("567")
		const intHudOjoc = BigInt("-436")
		const uintSZktx2Q = BigInt("194")
		const stringPnIgxZf = "I1NRoubu69oujjhIbbjDmUQYB2QrzK6IVhMK5"
		const stringppxlus = "wIsCsmaLmLiyksxhCajtcLDEbx7H6utRGt73wfq56IntxNEWklfe2orjngOIctjUMkvLP5YwmaXVxPj9a6OfjMbXRPn1"
		const stringYmBCAYL = await UFragmentsBxfXY1J.name.call({from: "0x0000000000000000000000000000000000000001"});
		const string8uFzUl = await UFragmentsBxfXY1J.name.call({from: accounts[2]});
//		const int256u4b60O = await UFragmentsBxfXY1J.mul.call(intHudOjoc, intHOUqC0b, {from: accounts[1]});
//		const stringN9zyWOq = await UFragmentsBxfXY1J.initialize.call(stringppxlus, stringPnIgxZf, uintSZktx2Q, {from: accounts[5]});

		assert.equal(string8uFzUl, "")
		assert.equal(stringYmBCAYL, "")
		await expect(UFragmentsBxfXY1J.mul.call(intHudOjoc, intHOUqC0b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const uintfF2MKoI = BigInt("1055")
		const addressoli4EEE = accounts[0]
		const uintyiwnNai = BigInt("1836")
		const addresspHKGBH2 = accounts[1]
		const intvXjWP9u = BigInt("-1733")
		const inthKFGIRX = BigInt("-473")
		const boolSsyX3zk = await UFragmentsnGjJ0Z4.approve.call(addressoli4EEE, uintfF2MKoI, {from: accounts[3]});
//		const boolOP4DQjU = await UFragmentsnGjJ0Z4.transfer.call(addresspHKGBH2, uintyiwnNai, {from: "0x0000000000000000000000000000000000000001"});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(inthKFGIRX, intvXjWP9u, {from: accounts[1]});

		assert.equal(boolSsyX3zk, true)
		await expect(UFragmentsnGjJ0Z4.transfer.call(addresspHKGBH2, uintyiwnNai, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsn0LFRKr = await UFragments.new({from: accounts[1]});
		const addressZlYhbC7 = accounts[2]
		const uint8LsYCZLj = await UFragmentsn0LFRKr.decimals.call({from: accounts[1]});
//		const address56m9zB = await UFragmentsn0LFRKr.initialize.call(addressZlYhbC7, {from: accounts[5]});
//		const stringKJ1LuQH = await UFragmentsn0LFRKr.symbol.call({from: accounts[2]});
//		await UFragmentsn0LFRKr.onlyOwner.call({from: accounts[3]});
//		const stringXouZIbc = await UFragmentsn0LFRKr.name.call({from: accounts[0]});
//		await UFragmentsn0LFRKr.initializer.call({from: accounts[3]});

		assert.equal(uint8LsYCZLj, BigInt("0"))
		await expect(UFragmentsn0LFRKr.initialize.call(addressZlYhbC7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const uintjYqC1ca = BigInt("1899")
		const addressPH9gplw = accounts[0]
		const addressKnhkJnJ = accounts[4]
		const intCEGeju = BigInt("-1733")
		const intcE6ypEI = BigInt("-457")
//		const boolftHWBnU = await UFragmentsnGjJ0Z4.transferFrom.call(addressKnhkJnJ, addressPH9gplw, uintjYqC1ca, {from: "0x0000000000000000000000000000000000000001"});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(intcE6ypEI, intCEGeju, {from: accounts[1]});
//		const uint256ijTbJs9 = await UFragmentsnGjJ0Z4.calRebase.call({from: accounts[1]});

		await expect(UFragmentsnGjJ0Z4.transferFrom.call(addressKnhkJnJ, addressPH9gplw, uintjYqC1ca, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTrgunQC = await UFragments.new({from: accounts[1]});
		const addressEVZ1d9V = accounts[1]
		const addressQZvrUoV = accounts[0]
		const uintesvpRf = BigInt("26")
		const stringQTSfbAk = "YAvYxEIUKJ6Pbx4I1vaIuLzuXxe9drEE9HkbJJpr42PlPKJJ7ciwJYvNY"
		const stringRVU5yLL = "cmkixbDEIB99iE0UDgReu6xIOfSNaM9helNDKey1STw8WwOFyiiXwEL5ri5jg"
		const intlX0i2b5 = BigInt("902")
		const intz8V4pbl = BigInt("-1496")
		const intBl0zvWq = BigInt("948")
		const uintFpp8r2I = BigInt("897")
		const addressA3EVAn = accounts[4]
		const uint256q8aU8L5 = await UFragmentsTrgunQC.allowance.call(addressQZvrUoV, addressEVZ1d9V, {from: "0x0000000000000000000000000000000000000001"});
		const stringJECX84Y = await UFragmentsTrgunQC.initialize.call(stringRVU5yLL, stringQTSfbAk, uintesvpRf, {from: accounts[3]});
//		const int256y6GbiQ2 = await UFragmentsTrgunQC.mul.call(intz8V4pbl, intlX0i2b5, {from: accounts[1]});
//		const int256Tdfted = await UFragmentsTrgunQC.abs.call(intBl0zvWq, {from: "0x0000000000000000000000000000000000000001"});
//		const booldKJCAb6 = await UFragmentsTrgunQC.transfer.call(addressA3EVAn, uintFpp8r2I, {from: accounts[0]});

		assert.equal(uint256q8aU8L5, BigInt("0"))
		await expect(UFragmentsTrgunQC.mul.call(intz8V4pbl, intlX0i2b5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTrgunQC = await UFragments.new({from: accounts[1]});
		const uint1bNAtl = BigInt("897")
		const addressuhEvfk = accounts[3]
		const uintUFeUj59 = BigInt("201")
		const stringdwhcByR = "M1y7WoHrvfzIh9GQ3ml2FjlATdwSVNCS83v4hccRFKOSPHYS41EgpB"
		const stringb6sbDiO = "OAUZUD7UBXNVYOeh93bZWR0XWWovyArwzSj"
		const stringMRIxKa6 = await UFragmentsTrgunQC.symbol.call({from: accounts[0]});
//		const booldKJCAb6 = await UFragmentsTrgunQC.transfer.call(addressuhEvfk, uint1bNAtl, {from: accounts[0]});
//		const stringymMLQTH = await UFragmentsTrgunQC.initialize.call(stringb6sbDiO, stringdwhcByR, uintUFeUj59, {from: accounts[3]});

		assert.equal(stringMRIxKa6, "")
		await expect(UFragmentsTrgunQC.transfer.call(addressuhEvfk, uint1bNAtl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnGjJ0Z4 = await UFragments.new({from: accounts[2]});
		const intu4y4DCv = BigInt("1641")
		const intg08rr0y = BigInt("-1771")
		const intvKEal3 = BigInt("-1733")
		const intqCmkQQv = BigInt("-622")
		const uint256mHMYhy2 = await UFragmentsnGjJ0Z4.totalSupply.call({from: accounts[3]});
//		const int256HfkJaU8 = await UFragmentsnGjJ0Z4.mul.call(intg08rr0y, intu4y4DCv, {from: accounts[4]});
//		const int256Cr8IKTL = await UFragmentsnGjJ0Z4.div.call(intqCmkQQv, intvKEal3, {from: accounts[1]});

		assert.equal(uint256mHMYhy2, BigInt("0"))
		await expect(UFragmentsnGjJ0Z4.mul.call(intg08rr0y, intu4y4DCv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})