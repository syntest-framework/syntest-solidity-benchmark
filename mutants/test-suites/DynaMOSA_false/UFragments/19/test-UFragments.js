const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsVCLNjM = await UFragments.new({from: accounts[4]});
		const uintHFqVukK = BigInt("686")
		const addressH5w34eu = accounts[3]
		const addressYm8krN = accounts[3]
		const boolu8qo8Q = await UFragmentsVCLNjM.approve.call(addressH5w34eu, uintHFqVukK, {from: "0x0000000000000000000000000000000000000001"});
		const boolKG9mSZq = await UFragmentsVCLNjM.rebaseTimeInfo.call({from: accounts[1]});
//		const addressgazRpWZ = await UFragmentsVCLNjM.transferOwnership.call(addressYm8krN, {from: accounts[3]});
//		const boolJ57Jm2g = await UFragmentsVCLNjM.isOwner.call({from: accounts[5]});

		assert.equal(boolu8qo8Q, true)
		await expect(UFragmentsVCLNjM.transferOwnership.call(addressYm8krN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsgBna7PX = await UFragments.new({from: accounts[0]});
		const addressm3Lyrib = accounts[3]
		const uintBylGEFJ = BigInt("819")
		const addressEbIfQ6n = accounts[0]
		const intFYG82SV = BigInt("1613")
		const intVEnKBRX = BigInt("1701")
		const addressHvXsfjl = accounts[4]
		const addressXhmrc3m = accounts[3]
		const uint256x7eh3eg = await UFragmentsgBna7PX.totalSupply.call({from: accounts[4]});
//		const addressPBpmvhZ = await UFragmentsgBna7PX.initialize.call(addressm3Lyrib, {from: accounts[5]});
//		const boolqMsLiYr = await UFragmentsgBna7PX.transfer.call(addressEbIfQ6n, uintBylGEFJ, {from: accounts[4]});
//		const int256bpXAeJ7 = await UFragmentsgBna7PX.mul.call(intVEnKBRX, intFYG82SV, {from: accounts[4]});
//		const boolI36oc8T = await UFragmentsgBna7PX.isOwner.call({from: accounts[2]});
//		const uint256yP0EY5W = await UFragmentsgBna7PX.allowance.call(addressXhmrc3m, addressHvXsfjl, {from: accounts[5]});

		assert.equal(uint256x7eh3eg, BigInt("0"))
		await expect(UFragmentsgBna7PX.initialize.call(addressm3Lyrib, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLunydQ = await UFragments.new({from: accounts[4]});
		const intcYj7WAB = BigInt("-1928")
		const intN7F8Fy = BigInt("-1512")
		const addresstoYdc9C = accounts[3]
//		const int256BnK6m47 = await UFragmentsLunydQ.add.call(intN7F8Fy, intcYj7WAB, {from: accounts[4]});
//		const uint256i8IKubw = await UFragmentsLunydQ.balanceOf.call(addresstoYdc9C, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256AWO1Du = await UFragmentsLunydQ.totalSupply.call({from: accounts[3]});

		await expect(UFragmentsLunydQ.add.call(intN7F8Fy, intcYj7WAB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsfZQZnK = await UFragments.new({from: accounts[5]});
		const addressuG7dttT = accounts[4]
		const addressKAelxyO = accounts[1]
		const intz5raXui = BigInt("-1577")
		const uint256c2OFaSx = await UFragmentsfZQZnK.allowance.call(addressKAelxyO, addressuG7dttT, {from: accounts[0]});
//		const uint256YL1jYDV = await UFragmentsfZQZnK.calRebase.call({from: accounts[0]});
//		const int256NL7CZSV = await UFragmentsfZQZnK.abs.call(intz5raXui, {from: accounts[0]});
//		const stringTDeHgwz = await UFragmentsfZQZnK.name.call({from: accounts[1]});
//		await UFragmentsfZQZnK.onlyOwner.call({from: accounts[3]});

		assert.equal(uint256c2OFaSx, BigInt("0"))
		await expect(UFragmentsfZQZnK.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsoRtJvr2 = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbBfifoX = accounts[0]
		const addresspX19ied = accounts[2]
		const intNKxgWRJ = BigInt("756")
		const intdUjOPQB = BigInt("1692")
		const uint256lVrlfyl = await UFragmentsoRtJvr2.balanceOf.call(addressbBfifoX, {from: "0x0000000000000000000000000000000000000001"});
		const addressKTVKj7n = await UFragmentsoRtJvr2.owner.call({from: accounts[4]});
		const addressw37GMqx = await UFragmentsoRtJvr2.initialize.call(addresspX19ied, {from: accounts[0]});
		const int256nM11QiA = await UFragmentsoRtJvr2.add.call(intdUjOPQB, intNKxgWRJ, {from: accounts[3]});
	});

	it('test for UFragments', async () => {
		const UFragmentsLunydQ = await UFragments.new({from: accounts[4]});
		const addressdgiMvfZ = accounts[3]
		const uint256i8IKubw = await UFragmentsLunydQ.balanceOf.call(addressdgiMvfZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AWO1Du = await UFragmentsLunydQ.totalSupply.call({from: accounts[3]});

		assert.equal(uint256AWO1Du, BigInt("0"))
		assert.equal(uint256i8IKubw, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsQzIDKzm = await UFragments.new({from: accounts[4]});
		const intSx4wOQ = BigInt("371")
		const intryV5Hnj = BigInt("1438")
		const addressZN8VuOA = accounts[3]
		const uint8IwSQdNz = await UFragmentsQzIDKzm.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256gn1egrn = await UFragmentsQzIDKzm.add.call(intryV5Hnj, intSx4wOQ, {from: accounts[3]});
//		const stringKZY9Ae5 = await UFragmentsQzIDKzm.symbol.call({from: accounts[1]});
//		const uint256BrBOZz9 = await UFragmentsQzIDKzm.balanceOf.call(addressZN8VuOA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8IwSQdNz, BigInt("0"))
		await expect(UFragmentsQzIDKzm.add.call(intryV5Hnj, intSx4wOQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentskVLaPfG = await UFragments.new({from: accounts[5]});
		const intoCRfb9Z = BigInt("-664")
		const intYIrCTyk = BigInt("-1745")
		const stringiMxov0O = await UFragmentskVLaPfG.symbol.call({from: accounts[0]});
//		const uint256uhpIatZ = await UFragmentskVLaPfG.calRebase.call({from: "0x0000000000000000000000000000000000000001"});
//		const int256jyutqOi = await UFragmentskVLaPfG.div.call(intYIrCTyk, intoCRfb9Z, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentskVLaPfG.onlyOwner.call({from: accounts[5]});
//		const uint8HVZlFv7 = await UFragmentskVLaPfG.decimals.call({from: accounts[1]});

		assert.equal(stringiMxov0O, "")
		await expect(UFragmentskVLaPfG.calRebase.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNFy72vr = await UFragments.new({from: accounts[0]});
		const uinta1UKDJg = BigInt("1819")
		const addresslVhXAnA = accounts[5]
		const addressCZOf6dI = accounts[3]
		const uintEp1Wkb0 = BigInt("94")
		const addressePEbrXn = accounts[1]
		const uintZ8UxTE = BigInt("1658")
		const addressxZK8UX = accounts[2]
//		const boolmLmthnM = await UFragmentsNFy72vr.transferFrom.call(addressCZOf6dI, addresslVhXAnA, uinta1UKDJg, {from: accounts[3]});
//		const boolryyZ6a = await UFragmentsNFy72vr.approve.call(addressePEbrXn, uintEp1Wkb0, {from: accounts[4]});
//		const boolCPaAAR0 = await UFragmentsNFy72vr.approve.call(addressxZK8UX, uintZ8UxTE, {from: accounts[3]});

		await expect(UFragmentsNFy72vr.transferFrom.call(addressCZOf6dI, addresslVhXAnA, uinta1UKDJg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLunydQ = await UFragments.new({from: accounts[4]});
		const uint256AWO1Du = await UFragmentsLunydQ.totalSupply.call({from: accounts[3]});
		const stringS1gSLZJ = await UFragmentsLunydQ.name.call({from: accounts[3]});

		assert.equal(stringS1gSLZJ, "")
		assert.equal(uint256AWO1Du, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsQzIDKzm = await UFragments.new({from: accounts[4]});
		const intJZ5q0xe = BigInt("372")
		const intkwgzUXr = BigInt("1438")
		const addressWMriInI = accounts[0]
		const addressHWrtB9C = accounts[4]
		const addressNiFzJy3 = accounts[0]
		const addressMalZWuY = await UFragmentsQzIDKzm.owner.call({from: accounts[2]});
//		const int256gn1egrn = await UFragmentsQzIDKzm.add.call(intkwgzUXr, intJZ5q0xe, {from: accounts[3]});
//		const uint256wW9kg9f = await UFragmentsQzIDKzm.allowance.call(addressHWrtB9C, addressWMriInI, {from: accounts[5]});
//		const uint256JUa7R4D = await UFragmentsQzIDKzm.balanceOf.call(addressNiFzJy3, {from: accounts[4]});

		assert.equal(addressMalZWuY, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsQzIDKzm.add.call(intkwgzUXr, intJZ5q0xe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIYvsLuT = await UFragments.new({from: accounts[0]});
		const uintuciFiA = BigInt("1439")
		const addressWH6bHS8 = accounts[0]
		const uintyXapy8W = BigInt("1133")
		const addressh61n01x = accounts[4]
//		const boolem3Z8L = await UFragmentsIYvsLuT.transfer.call(addressWH6bHS8, uintuciFiA, {from: accounts[4]});
//		const boolEuNQoyq = await UFragmentsIYvsLuT.rebaseTimeInfo.call({from: accounts[5]});
//		const boolwmHuNbE = await UFragmentsIYvsLuT.transfer.call(addressh61n01x, uintyXapy8W, {from: accounts[1]});
//		await UFragmentsIYvsLuT.renounceOwnership.call({from: accounts[2]});

		await expect(UFragmentsIYvsLuT.transfer.call(addressWH6bHS8, uintuciFiA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsLunydQ = await UFragments.new({from: accounts[4]});
		const addressp2IPSLE = accounts[5]
		const uinttPr4NSY = BigInt("30")
		const stringmOiQ4Vc = "Aj9oKB4vRFFtE2t0PXoUgtAnPJioV8cc9OTzhkccKwNhJwDa2C89u2LskiV3rAAN6Xd2Tn2voXv6pia6SWHUU6wXqtHycJ8lK"
		const stringNIRRnWC = "cEHEQ5DMCV6P83eGlcY8ME60u2QYPBFTwLwNXeol5eXgXfaXpbd7zODYHWUuygjdG2iSUKU5jxcuaUl"
		const uinteNZEWwp = BigInt("1225")
		const addressY9GTAOE = accounts[0]
		const addressMzvHGKV = accounts[3]
		const uint256i8IKubw = await UFragmentsLunydQ.balanceOf.call(addressp2IPSLE, {from: "0x0000000000000000000000000000000000000001"});
		const stringdudJ8xY = await UFragmentsLunydQ.initialize.call(stringNIRRnWC, stringmOiQ4Vc, uinttPr4NSY, {from: accounts[3]});
//		const boolhKpX4zm = await UFragmentsLunydQ.transfer.call(addressY9GTAOE, uinteNZEWwp, {from: accounts[5]});
//		const uint256CdH92cu = await UFragmentsLunydQ.balanceOf.call(addressMzvHGKV, {from: accounts[5]});

		assert.equal(uint256i8IKubw, BigInt("0"))
		await expect(UFragmentsLunydQ.transfer.call(addressY9GTAOE, uinteNZEWwp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})