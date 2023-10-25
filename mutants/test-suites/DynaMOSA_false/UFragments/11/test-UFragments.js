const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsuAFP5Tk = await UFragments.new({from: accounts[0]});
		const stringCJe8Nq2 = await UFragmentsuAFP5Tk.name.call({from: accounts[5]});
		const uint8nufJTF = await UFragmentsuAFP5Tk.decimals.call({from: accounts[4]});

		assert.equal(stringCJe8Nq2, "")
		assert.equal(uint8nufJTF, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsYzW7BWC = await UFragments.new({from: accounts[4]});
		const addressx9BYoNk = accounts[1]
		const int9YWKj1 = BigInt("-1130")
		const int7qXbrj = BigInt("-310")
		const intTd96ClD = BigInt("-1338")
		const intSPV9Ug = BigInt("1224")
//		const uint256Ay834vm = await UFragmentsYzW7BWC.calRebase.call({from: accounts[1]});
//		const uint256McaWjX3 = await UFragmentsYzW7BWC.balanceOf.call(addressx9BYoNk, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsYzW7BWC.onlyOwner.call({from: accounts[0]});
//		const int256WbDdyOA = await UFragmentsYzW7BWC.add.call(int7qXbrj, int9YWKj1, {from: accounts[4]});
//		const int256BZpEPtW = await UFragmentsYzW7BWC.mul.call(intSPV9Ug, intTd96ClD, {from: accounts[2]});

		await expect(UFragmentsYzW7BWC.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsjKa0Qf3 = await UFragments.new({from: accounts[1]});
		const uintFdOUzi = BigInt("1842")
		const addressLmf3gOk = accounts[0]
		const stringB9vlDS = await UFragmentsjKa0Qf3.symbol.call({from: accounts[2]});
//		const addresseohkohL = await UFragmentsjKa0Qf3.initRebase.call(addressLmf3gOk, uintFdOUzi, {from: accounts[1]});
//		const stringvjgIPbz = await UFragmentsjKa0Qf3.name.call({from: accounts[3]});
//		const uint256l69LmhL = await UFragmentsjKa0Qf3.calRebase.call({from: accounts[5]});

		assert.equal(stringB9vlDS, "")
		await expect(UFragmentsjKa0Qf3.initRebase.call(addressLmf3gOk, uintFdOUzi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFhCqV2v = await UFragments.new({from: accounts[0]});
		const addressNOsbYOf = accounts[1]
		const addressp4wV541 = await UFragmentsFhCqV2v.owner.call({from: accounts[2]});
//		const uint256DMmTNdj = await UFragmentsFhCqV2v.calRebase.call({from: accounts[5]});
//		const uint256tN9yryH = await UFragmentsFhCqV2v.balanceOf.call(addressNOsbYOf, {from: accounts[3]});
//		await UFragmentsFhCqV2v.initializer.call({from: accounts[0]});

		assert.equal(addressp4wV541, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsFhCqV2v.calRebase.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWDCq90t = await UFragments.new({from: accounts[3]});
		const uintbazEQ7 = BigInt("448")
		const addressfUcnFZ4 = accounts[2]
		const intsv2QDBV = BigInt("-386")
		const uintXxd2VU4 = BigInt("1808")
		const addressgNILBxq = accounts[0]
		const intClo4Kc = BigInt("1044")
		const intmjCHXxg = BigInt("1625")
		const addressOUHI7vD = await UFragmentsWDCq90t.owner.call({from: accounts[5]});
//		const boolF41sYdg = await UFragmentsWDCq90t.transfer.call(addressfUcnFZ4, uintbazEQ7, {from: accounts[0]});
//		const int256GOTNMzf = await UFragmentsWDCq90t.abs.call(intsv2QDBV, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstZGKXFV = await UFragmentsWDCq90t.initRebase.call(addressgNILBxq, uintXxd2VU4, {from: accounts[3]});
//		const int256wA4iCkd = await UFragmentsWDCq90t.mul.call(intmjCHXxg, intClo4Kc, {from: accounts[0]});

		assert.equal(addressOUHI7vD, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsWDCq90t.transfer.call(addressfUcnFZ4, uintbazEQ7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFQctJ3X = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intd57SwD = BigInt("-919")
		const intvhnorXR = BigInt("-257")
		const intvyeGfOM = BigInt("928")
		const uintCb0IfrC = BigInt("378")
		const addressnbIcyRF = accounts[1]
		const uint256YmVZ90S = await UFragmentsFQctJ3X.totalSupply.call({from: accounts[0]});
		const addressx8xOU14 = await UFragmentsFQctJ3X.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const int256dNewQL8 = await UFragmentsFQctJ3X.sub.call(intvhnorXR, intd57SwD, {from: accounts[3]});
		const int256XOtAQw6 = await UFragmentsFQctJ3X.abs.call(intvyeGfOM, {from: accounts[0]});
		const addressl8epDu = await UFragmentsFQctJ3X.initRebase.call(addressnbIcyRF, uintCb0IfrC, {from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsk2Bplo = await UFragments.new({from: accounts[4]});
		const addressmMkP3I = "0x0000000000000000000000000000000000000001"
		const addressQf2yhhW = accounts[1]
		const boolpRpcki = await UFragmentsk2Bplo.isOwner.call({from: accounts[1]});
		const stringxVbAXXH = await UFragmentsk2Bplo.symbol.call({from: accounts[4]});
		const uint256NUW3cbU = await UFragmentsk2Bplo.allowance.call(addressQf2yhhW, addressmMkP3I, {from: "0x0000000000000000000000000000000000000001"});
		const stringmerMmb7 = await UFragmentsk2Bplo.symbol.call({from: accounts[4]});

		assert.equal(boolpRpcki, false)
		assert.equal(stringmerMmb7, "")
		assert.equal(stringxVbAXXH, "")
		assert.equal(uint256NUW3cbU, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsCPYOyF9 = await UFragments.new({from: accounts[0]});
		const addressGXphN8r = accounts[0]
		const addresspJpzjsW = accounts[1]
//		const addressBHA8D8M = await UFragmentsCPYOyF9.initialize.call(addressGXphN8r, {from: accounts[0]});
//		const addressNyVRTHj = await UFragmentsCPYOyF9.initialize.call(addresspJpzjsW, {from: accounts[1]});
//		await UFragmentsCPYOyF9.initializer.call({from: accounts[4]});

		await expect(UFragmentsCPYOyF9.initialize.call(addressGXphN8r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsx3JMZ5o = await UFragments.new({from: accounts[5]});
//		await UFragmentsx3JMZ5o.onlyOwner.call({from: accounts[4]});
//		const stringvPyesMH = await UFragmentsx3JMZ5o.name.call({from: accounts[0]});
//		const uint256wgmowIy = await UFragmentsx3JMZ5o.calRebase.call({from: accounts[3]});
//		const uint8Pk5sBzC = await UFragmentsx3JMZ5o.decimals.call({from: accounts[1]});
//		await UFragmentsx3JMZ5o.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsx3JMZ5o.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFhCqV2v = await UFragments.new({from: accounts[0]});
		const addressiK5slKO = accounts[1]
		const uinti0UWvM6 = BigInt("38")
		const stringgdwXyCb = "jrtl5x2Lps1qigdiqLtwtBBcQGsSlgFxufVVcBK9JhXWXrWMkq43KkVjRog5lN1BfSu8RXeLAuetJbc9QRhFPrQrP"
		const stringWri3IwF = "60QMDdktxIILYomfP9XQXEL4vzT30nIDWV1nvzjbkbR"
		const addressp4wV541 = await UFragmentsFhCqV2v.owner.call({from: accounts[2]});
		const uint256tN9yryH = await UFragmentsFhCqV2v.balanceOf.call(addressiK5slKO, {from: accounts[3]});
		const stringzUlAjjc = await UFragmentsFhCqV2v.initialize.call(stringWri3IwF, stringgdwXyCb, uinti0UWvM6, {from: accounts[2]});
//		await UFragmentsFhCqV2v.initializer.call({from: accounts[0]});

		assert.equal(addressp4wV541, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256tN9yryH, BigInt("0"))
		await expect(UFragmentsFhCqV2v.initializer.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWDCq90t = await UFragments.new({from: accounts[3]});
		const uintu6Oikit = BigInt("448")
		const addressORQHofU = accounts[2]
		const uinthr89nNg = BigInt("1808")
		const addressZyeVI6Q = accounts[1]
		const addressWJpeiKn = accounts[2]
		const intQfGqGyu = BigInt("1044")
		const intofuf7Q = BigInt("1625")
		const boolS8jI2eU = await UFragmentsWDCq90t.rebaseTimeInfo.call({from: accounts[1]});
		const addressOUHI7vD = await UFragmentsWDCq90t.owner.call({from: accounts[5]});
		const boolctGoBj8 = await UFragmentsWDCq90t.rebaseTimeInfo.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolF41sYdg = await UFragmentsWDCq90t.transfer.call(addressORQHofU, uintu6Oikit, {from: accounts[0]});
//		const addresstZGKXFV = await UFragmentsWDCq90t.initRebase.call(addressZyeVI6Q, uinthr89nNg, {from: accounts[3]});
//		const addressTLSsXiL = await UFragmentsWDCq90t.initialize.call(addressWJpeiKn, {from: accounts[2]});
//		const int256wA4iCkd = await UFragmentsWDCq90t.mul.call(intofuf7Q, intQfGqGyu, {from: accounts[0]});

		assert.equal(addressOUHI7vD, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsWDCq90t.transfer.call(addressORQHofU, uintu6Oikit, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuAFP5Tk = await UFragments.new({from: accounts[0]});
		const uintA0LtHA = BigInt("1601")
		const addressSCsdaND = accounts[0]
		const addressHTpZlQg = accounts[2]
		const addressDzQndIh = accounts[1]
//		const booletJb9dO = await UFragmentsuAFP5Tk.transferFrom.call(addressHTpZlQg, addressSCsdaND, uintA0LtHA, {from: accounts[2]});
//		const stringCJe8Nq2 = await UFragmentsuAFP5Tk.name.call({from: accounts[5]});
//		const uint256gnLW3cp = await UFragmentsuAFP5Tk.balanceOf.call(addressDzQndIh, {from: accounts[0]});

		await expect(UFragmentsuAFP5Tk.transferFrom.call(addressHTpZlQg, addressSCsdaND, uintA0LtHA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWDCq90t = await UFragments.new({from: accounts[3]});
		const uintq6CmbeE = BigInt("36")
		const address4ePjZb = accounts[2]
		const uintbj8bu8G = BigInt("403")
		const addressEy2lGWJ = accounts[2]
		const intJMgFufA = BigInt("-386")
		const uintUN207oF = BigInt("1808")
		const addressIz35fj = accounts[0]
		const uintq2sbTd = BigInt("254")
		const stringXJqPDv1 = "f9oehz97Yzwu8UJvZ"
		const string9XvzHc = "njJR9VIsMJjFtMtOGE6icrIrUiBLlAPBxVeawtru618AEdfTzXFy4mH1b5KHA1qbURQW5FbGN9RrhldRpoSILeClGE0Ioo8I1"
		const intI6Veobj = BigInt("1060")
		const intP91RVm = BigInt("1625")
		const addressOUHI7vD = await UFragmentsWDCq90t.owner.call({from: accounts[5]});
		const boolrTSqjtQ = await UFragmentsWDCq90t.approve.call(address4ePjZb, uintq6CmbeE, {from: accounts[0]});
//		const boolF41sYdg = await UFragmentsWDCq90t.transfer.call(addressEy2lGWJ, uintbj8bu8G, {from: accounts[0]});
//		const int256GOTNMzf = await UFragmentsWDCq90t.abs.call(intJMgFufA, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstZGKXFV = await UFragmentsWDCq90t.initRebase.call(addressIz35fj, uintUN207oF, {from: accounts[3]});
//		const stringWGkJnX = await UFragmentsWDCq90t.initialize.call(string9XvzHc, stringXJqPDv1, uintq2sbTd, {from: "0x0000000000000000000000000000000000000001"});
//		const int256wA4iCkd = await UFragmentsWDCq90t.mul.call(intP91RVm, intI6Veobj, {from: accounts[0]});

		assert.equal(addressOUHI7vD, 0x0000000000000000000000000000000000000000)
		assert.equal(boolrTSqjtQ, true)
		await expect(UFragmentsWDCq90t.transfer.call(addressEy2lGWJ, uintbj8bu8G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsuAFP5Tk = await UFragments.new({from: accounts[0]});
		const uint256W5RCYl6 = await UFragmentsuAFP5Tk.totalSupply.call({from: accounts[0]});
//		const uint256JmHCd9R = await UFragmentsuAFP5Tk.calRebase.call({from: accounts[4]});

		assert.equal(uint256W5RCYl6, BigInt("0"))
		await expect(UFragmentsuAFP5Tk.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})