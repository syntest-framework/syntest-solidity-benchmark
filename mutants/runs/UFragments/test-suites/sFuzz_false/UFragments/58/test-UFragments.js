const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsrygOjfi = await UFragments.new({from: accounts[0]});
		const uintLy8POyF = BigInt("1679")
		const addressuLLFELD = accounts[1]
		const addressq57BLw = accounts[2]
		await UFragmentsrygOjfi.renounceOwnership.call({from: accounts[3]});
		await UFragmentsrygOjfi.renounceOwnership.call({from: accounts[1]});
		const boolnhpoEgt = await UFragmentsrygOjfi.transferFrom.call(addressq57BLw, addressuLLFELD, uintLy8POyF, {from: accounts[2]});
		const stringHkUCcGA = await UFragmentsrygOjfi.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsrygOjfi.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJjlqdAW = await UFragments.new({from: accounts[1]});
		const addressDWxFxyM = accounts[3]
		const uint8kZxPLX = await UFragmentsJjlqdAW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8Qp0jdJd = await UFragmentsJjlqdAW.decimals.call({from: accounts[5]});
		const addressdQcqFc5 = await UFragmentsJjlqdAW.transferOwnership.call(addressDWxFxyM, {from: accounts[4]});

		assert.equal(uint8Qp0jdJd, BigInt("0"))
		assert.equal(uint8kZxPLX, BigInt("0"))
		await expect(UFragmentsJjlqdAW.transferOwnership.call(addressDWxFxyM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseKwHAWY = await UFragments.new({from: accounts[1]});
		const intMZFpoaq = BigInt("1118")
		const int5nOht3 = BigInt("502")
		const intCjAcsJ0 = BigInt("-1025")
		const intdibP4TC = BigInt("724")
		const int256UPVgLD7 = await UFragmentseKwHAWY.sub.call(int5nOht3, intMZFpoaq, {from: accounts[2]});
		const boolVSXaurp = await UFragmentseKwHAWY.isOwner.call({from: accounts[2]});
		const int256mKOm9hM = await UFragmentseKwHAWY.sub.call(intdibP4TC, intCjAcsJ0, {from: accounts[2]});

		await expect(UFragmentseKwHAWY.sub.call(int5nOht3, intMZFpoaq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressS8gEB3b = accounts[5]
		const intGJWlkKd = BigInt("-1172")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressS8gEB3b, {from: accounts[0]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intGJWlkKd, {from: accounts[2]});

		assert.equal(addressHZUgTMZ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intGJWlkKd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsb0acHOc = await UFragments.new({from: accounts[4]});
		const addressVj31K3B = accounts[5]
		const uintSEND436 = BigInt("267")
		const addressbikLSb = accounts[2]
		const addresshvGKt28 = accounts[0]
		const uint8ZnzaKM6 = await UFragmentsb0acHOc.decimals.call({from: accounts[3]});
		const addresslhsXb6J = await UFragmentsb0acHOc.initialize.call(addressVj31K3B, {from: accounts[0]});
		const boolTeQCOI5 = await UFragmentsb0acHOc.rebaseTimeInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const boolazpNcOG = await UFragmentsb0acHOc.isOwner.call({from: accounts[1]});
		const boolhWpS1R1 = await UFragmentsb0acHOc.transferFrom.call(addresshvGKt28, addressbikLSb, uintSEND436, {from: accounts[4]});

		assert.equal(uint8ZnzaKM6, BigInt("0"))
		await expect(UFragmentsb0acHOc.initialize.call(addressVj31K3B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxazniKg = await UFragments.new({from: accounts[5]});
		const addressHejMD2b = accounts[2]
		const uintcwCosTU = BigInt("179")
		const addressCvwjUu = accounts[5]
		const addressbqBybXS = accounts[1]
		const uintrw8VRgl = BigInt("506")
		const addressePAdfcE = accounts[3]
		const addressBNTcxc2 = accounts[3]
		const addressM5DFyKb = accounts[1]
		const uint256yNrsOlg = await UFragmentsxazniKg.balanceOf.call(addressHejMD2b, {from: accounts[1]});
		const boolckhqxg1 = await UFragmentsxazniKg.transferFrom.call(addressbqBybXS, addressCvwjUu, uintcwCosTU, {from: accounts[0]});
		const addressQzV1hic = await UFragmentsxazniKg.initRebase.call(addressePAdfcE, uintrw8VRgl, {from: accounts[0]});
		const boolryrK7l7 = await UFragmentsxazniKg.rebaseTimeInfo.call({from: accounts[3]});
		const uint256aVDJnOo = await UFragmentsxazniKg.allowance.call(addressM5DFyKb, addressBNTcxc2, {from: accounts[4]});

		assert.equal(uint256yNrsOlg, BigInt("0"))
		await expect(UFragmentsxazniKg.transferFrom.call(addressbqBybXS, addressCvwjUu, uintcwCosTU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addresssdIeMXd = accounts[5]
		const ints0uLsj6 = BigInt("-1172")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addresssdIeMXd, {from: accounts[0]});
		const uint256QDQzwFf = await UFragmentseBojQa9.calRebase.call({from: accounts[4]});
		const stringwZqZDbL = await UFragmentseBojQa9.name.call({from: accounts[0]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(ints0uLsj6, {from: accounts[2]});

		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressGDvz2zq = accounts[5]
		const uintLgC6Vxe = BigInt("1042")
		const addressqIkF734 = accounts[1]
		const intLDc4Af = BigInt("-1172")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressGDvz2zq, {from: accounts[0]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});
		const boolKZRfmly = await UFragmentseBojQa9.approve.call(addressqIkF734, uintLgC6Vxe, {from: accounts[2]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intLDc4Af, {from: accounts[2]});

		assert.equal(addressHZUgTMZ, 0x0000000000000000000000000000000000000000)
		assert.equal(boolKZRfmly, true)
		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intLDc4Af, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJjlqdAW = await UFragments.new({from: accounts[1]});
		const addresssde2bYO = accounts[3]
		const uint8kZxPLX = await UFragmentsJjlqdAW.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringiFdwxuB = await UFragmentsJjlqdAW.symbol.call({from: accounts[1]});
		const uint8Qp0jdJd = await UFragmentsJjlqdAW.decimals.call({from: accounts[5]});
		const addressdQcqFc5 = await UFragmentsJjlqdAW.transferOwnership.call(addresssde2bYO, {from: accounts[4]});
		const boolzf31JT6 = await UFragmentsJjlqdAW.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256XcP6ID1 = await UFragmentsJjlqdAW.totalSupply.call({from: accounts[3]});

		assert.equal(stringiFdwxuB, "")
		assert.equal(uint8Qp0jdJd, BigInt("0"))
		assert.equal(uint8kZxPLX, BigInt("0"))
		await expect(UFragmentsJjlqdAW.transferOwnership.call(addresssde2bYO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressFh7r7io = accounts[5]
		const uintK0ZefpU = BigInt("55")
		const stringxcJhzyW = "a"
		const stringLuPtP0G = "AQsu4nYi537gtxM8RdEIlSjqDiBwnT97"
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressFh7r7io, {from: accounts[0]});
		const stringCkOPSde = await UFragmentseBojQa9.initialize.call(stringLuPtP0G, stringxcJhzyW, uintK0ZefpU, {from: accounts[4]});
		const addressHZUgTMZ = await UFragmentseBojQa9.owner.call({from: accounts[4]});

		assert.equal(addressHZUgTMZ, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256P1UHZX9, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressICefBQ = accounts[5]
		const intgIkylbc = BigInt("-1146")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressICefBQ, {from: accounts[0]});
		const stringacdsayk = await UFragmentseBojQa9.name.call({from: accounts[2]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intgIkylbc, {from: accounts[2]});

		assert.equal(stringacdsayk, "")
		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intgIkylbc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressaZQSLL = accounts[5]
		const intK0JE5iQ = BigInt("-1146")
		const intOiiCa9N = BigInt("-88")
		const intCf1qwlL = BigInt("-160")
		const boolvv3Fho = await UFragmentseBojQa9.rebaseTimeInfo.call({from: accounts[1]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressaZQSLL, {from: accounts[0]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intK0JE5iQ, {from: accounts[2]});
		const int256UbblIIf = await UFragmentseBojQa9.sub.call(intCf1qwlL, intOiiCa9N, {from: accounts[4]});

		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intK0JE5iQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addressqcXW1hI = accounts[5]
		const addressQpEUfEg = accounts[2]
		const addressCMPhHSg = accounts[0]
		const intEujzEOo = BigInt("-1328")
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addressqcXW1hI, {from: accounts[0]});
		const stringQa678c0 = await UFragmentseBojQa9.symbol.call({from: accounts[3]});
		const uint256IqoEw1A = await UFragmentseBojQa9.allowance.call(addressCMPhHSg, addressQpEUfEg, {from: accounts[4]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intEujzEOo, {from: accounts[2]});

		assert.equal(stringQa678c0, "")
		assert.equal(uint256IqoEw1A, BigInt("0"))
		assert.equal(uint256P1UHZX9, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intEujzEOo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsCkw0EVf = await UFragments.new({from: accounts[2]});
		const addressDh9zL7 = accounts[0]
		const uintzsHyPgt = BigInt("16")
		const address2UIP5L = "0x0000000000000000000000000000000000000001"
		const uintwGZqiZX = BigInt("285")
		const addressDF56HWA = accounts[3]
		const stringLs7RhOu = await UFragmentsCkw0EVf.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pz1MwvO = await UFragmentsCkw0EVf.balanceOf.call(addressDh9zL7, {from: accounts[4]});
		const boolAEncdMq = await UFragmentsCkw0EVf.transfer.call(address2UIP5L, uintzsHyPgt, {from: accounts[2]});
		const addressBPSXq8Q = await UFragmentsCkw0EVf.initRebase.call(addressDF56HWA, uintwGZqiZX, {from: accounts[5]});

		assert.equal(stringLs7RhOu, "")
		assert.equal(uint256pz1MwvO, BigInt("0"))
		await expect(UFragmentsCkw0EVf.transfer.call(address2UIP5L, uintzsHyPgt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWNHk7FC = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intXEPsKn0 = BigInt("659")
		const intYObGjUT = BigInt("-383")
		const uint8DmyAEUR = await UFragmentsWNHk7FC.decimals.call({from: accounts[1]});
		const int256hA8m4jB = await UFragmentsWNHk7FC.add.call(intYObGjUT, intXEPsKn0, {from: accounts[0]});
		const uint256iQwQAwj = await UFragmentsWNHk7FC.totalSupply.call({from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentseBojQa9 = await UFragments.new({from: accounts[3]});
		const addresska4QibW = accounts[5]
		const intIEwbmI = BigInt("-587")
		const uint256mNyZUhX = await UFragmentseBojQa9.totalSupply.call({from: accounts[0]});
		const uint256P1UHZX9 = await UFragmentseBojQa9.balanceOf.call(addresska4QibW, {from: accounts[0]});
		const int256mATlhof = await UFragmentseBojQa9.abs.call(intIEwbmI, {from: accounts[2]});

		assert.equal(uint256P1UHZX9, BigInt("0"))
		assert.equal(uint256mNyZUhX, BigInt("0"))
		await expect(UFragmentseBojQa9.abs.call(intIEwbmI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})