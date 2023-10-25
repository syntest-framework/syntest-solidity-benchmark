const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BkQ62ep = await GAZ_ERC20.new({from: accounts[0]});
		const uintwP2ILk = BigInt("835")
		const addressvZcCNzb = accounts[1]
		const uintkFL8mRv = BigInt("1551")
		const addressAGGg6AH = accounts[3]
		const addressLJPFWfh = accounts[4]
		const addressW57i0Zz = accounts[3]
		const uintNRkcuef = BigInt("1726")
		const addressTBilIr = accounts[0]
//		const boolrIE0Ws2 = await GAZ_ERC20BkQ62ep.transfer.call(addressvZcCNzb, uintwP2ILk, {from: accounts[5]});
//		const boolYBtdRD = await GAZ_ERC20BkQ62ep.transferFrom.call(addressLJPFWfh, addressAGGg6AH, uintkFL8mRv, {from: accounts[0]});
//		const boolxwwCFPK = await GAZ_ERC20BkQ62ep.approve.call(addressW57i0Zz, {from: accounts[4]});
//		const boolIPmZYqQ = await GAZ_ERC20BkQ62ep.transfer.call(addressTBilIr, uintNRkcuef, {from: accounts[1]});

		await expect(GAZ_ERC20BkQ62ep.transfer.call(addressvZcCNzb, uintwP2ILk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20QrnTijT = await GAZ_ERC20.new({from: accounts[2]});
		const uintBAEb70M = BigInt("151")
		const addressJVcCGPo = accounts[2]
		const addressykSPpc1 = accounts[5]
		const uintGtaWCzL = BigInt("479")
		const addressF8ObmPt = accounts[1]
		const uintLRje05 = BigInt("1108")
		const addressbi7woZa = accounts[1]
		const uintFr5PjjL = BigInt("242")
		const addressnn24Y3j = accounts[4]
		const boolBvvlrra = await GAZ_ERC20QrnTijT.transfer.call(addressJVcCGPo, uintBAEb70M, {from: accounts[2]});
//		const booluu7kYgx = await GAZ_ERC20QrnTijT.approve.call(addressykSPpc1, {from: accounts[1]});
//		const boolqsRvj4W = await GAZ_ERC20QrnTijT.transfer.call(addressF8ObmPt, uintGtaWCzL, {from: accounts[2]});
//		const bool8tWDrz = await GAZ_ERC20QrnTijT.transfer.call(addressbi7woZa, uintLRje05, {from: accounts[2]});
//		const boolajVmErb = await GAZ_ERC20QrnTijT.approve.call(addressnn24Y3j, uintFr5PjjL, {from: accounts[3]});

		assert.equal(boolBvvlrra, true)
		await expect(GAZ_ERC20QrnTijT.approve.call(addressykSPpc1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DFA4pku = await GAZ_ERC20.new({from: accounts[4]});
		const uintpVWQGvn = BigInt("755")
		const addressjz9TPZW = accounts[1]
		const uintP0ZIkIu = BigInt("1587")
		const address0j7nJs = accounts[0]
		const uintgTl6iPp = BigInt("350")
		const addressoJhmV4 = accounts[2]
		const uintDMTzHQx = BigInt("1182")
		const addresswQxmNSt = accounts[0]
		const addresscg8fYAV = accounts[2]
		const boolZp6Pet7 = await GAZ_ERC20DFA4pku.transfer.call(addressjz9TPZW, uintpVWQGvn, {from: accounts[4]});
		const boolAui54RN = await GAZ_ERC20DFA4pku.approve.call(address0j7nJs, uintP0ZIkIu, {from: accounts[1]});
//		const boolCY3kEHi = await GAZ_ERC20DFA4pku.transfer.call(addressoJhmV4, uintgTl6iPp, {from: accounts[1]});
//		const boolxEE0bkj = await GAZ_ERC20DFA4pku.transferFrom.call(addresscg8fYAV, addresswQxmNSt, uintDMTzHQx, {from: accounts[0]});

		assert.equal(boolAui54RN, true)
		assert.equal(boolZp6Pet7, true)
		await expect(GAZ_ERC20DFA4pku.transfer.call(addressoJhmV4, uintgTl6iPp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20jz0Y58M = await GAZ_ERC20.new({from: accounts[1]});
		const addressZXrKVep = "0x0000000000000000000000000000000000000001"
		const uintohAGbRp = BigInt("960")
		const addressPBKVN4f = accounts[0]
		const addressA2PMwkW = accounts[1]
//		const boolrTmRCeE = await GAZ_ERC20jz0Y58M.approve.call(addressZXrKVep, {from: accounts[5]});
//		const boolah59tr = await GAZ_ERC20jz0Y58M.approve.call(addressPBKVN4f, uintohAGbRp, {from: accounts[3]});
//		const boollpnDB9X = await GAZ_ERC20jz0Y58M.approve.call(addressA2PMwkW, {from: accounts[0]});

		await expect(GAZ_ERC20jz0Y58M.approve.call(addressZXrKVep, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20rzRIua3 = await GAZ_ERC20.new({from: accounts[4]});
		const uint9ZHkAQ = BigInt("1842")
		const addressxj11RJ = accounts[1]
		const uintpJkS2Dc = BigInt("782")
		const addressPWoqS3 = accounts[3]
		const addressB2DMPsT = accounts[1]
		const uintlvQEXnW = BigInt("853")
		const addresszD7WtEZ = accounts[3]
		const uintDJOCkPv = BigInt("1860")
		const addressQGiBTU8 = accounts[3]
		const boolSp9phBc = await GAZ_ERC20rzRIua3.approve.call(addressxj11RJ, uint9ZHkAQ, {from: accounts[1]});
		const boolanGWek = await GAZ_ERC20rzRIua3.approve.call(addressPWoqS3, uintpJkS2Dc, {from: accounts[1]});
//		const boolBh6AisP = await GAZ_ERC20rzRIua3.approve.call(addressB2DMPsT, {from: accounts[4]});
//		const boolBlAczD = await GAZ_ERC20rzRIua3.transfer.call(addresszD7WtEZ, uintlvQEXnW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAVwnn7Z = await GAZ_ERC20rzRIua3.transfer.call(addressQGiBTU8, uintDJOCkPv, {from: accounts[3]});

		assert.equal(boolSp9phBc, true)
		assert.equal(boolanGWek, true)
		await expect(GAZ_ERC20rzRIua3.approve.call(addressB2DMPsT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20rTQ793q = await GAZ_ERC20.new({from: accounts[0]});
		const uintFMuhFSx = BigInt("1035")
		const addressDMoTvXv = "0x0000000000000000000000000000000000000001"
		const addressZ2cMKLZ = accounts[2]
		const uintfJREKWd = BigInt("949")
		const addressKaMFfaF = accounts[4]
		const uintCjsbfVd = BigInt("1053")
		const addressGLB7jHU = accounts[0]
		const addressBeRdnuo = accounts[3]
//		const boolsnGgePZ = await GAZ_ERC20rTQ793q.transferFrom.call(addressZ2cMKLZ, addressDMoTvXv, uintFMuhFSx, {from: accounts[3]});
//		const boolkRuQgB7 = await GAZ_ERC20rTQ793q.transfer.call(addressKaMFfaF, uintfJREKWd, {from: accounts[2]});
//		const boolT5QMYPo = await GAZ_ERC20rTQ793q.transferFrom.call(addressBeRdnuo, addressGLB7jHU, uintCjsbfVd, {from: accounts[0]});

		await expect(GAZ_ERC20rTQ793q.transferFrom.call(addressZ2cMKLZ, addressDMoTvXv, uintFMuhFSx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DFA4pku = await GAZ_ERC20.new({from: accounts[4]});
		const uintDNXqDM = BigInt("755")
		const addressmbOCGfG = accounts[1]
		const addressokZGFTs = accounts[0]
		const uintdY8JPZy = BigInt("1587")
		const addressmquN4YM = accounts[0]
		const uintOXIO0b = BigInt("344")
		const addresssD1AGv6 = accounts[2]
		const uintVBgKRxU = BigInt("1182")
		const addressaNZCWXy = accounts[0]
		const addressnaPfIF2 = accounts[2]
		const boolZp6Pet7 = await GAZ_ERC20DFA4pku.transfer.call(addressmbOCGfG, uintDNXqDM, {from: accounts[4]});
//		const boolsa6SIU6 = await GAZ_ERC20DFA4pku.approve.call(addressokZGFTs, {from: accounts[3]});
//		const boolAui54RN = await GAZ_ERC20DFA4pku.approve.call(addressmquN4YM, uintdY8JPZy, {from: accounts[1]});
//		const boolCY3kEHi = await GAZ_ERC20DFA4pku.transfer.call(addresssD1AGv6, uintOXIO0b, {from: accounts[1]});
//		const boolxEE0bkj = await GAZ_ERC20DFA4pku.transferFrom.call(addressnaPfIF2, addressaNZCWXy, uintVBgKRxU, {from: accounts[0]});

		assert.equal(boolZp6Pet7, true)
		await expect(GAZ_ERC20DFA4pku.approve.call(addressokZGFTs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20O8bAGl1 = await GAZ_ERC20.new({from: accounts[4]});
		const addressCXCvDXD = accounts[1]
		const uintNTg1pZN = BigInt("2018")
		const addressFYxV8Za = "0x0000000000000000000000000000000000000001"
		const uintGs1hwf6 = BigInt("1040")
		const addressiXyeem7 = accounts[3]
//		const boolqt7KQ1f = await GAZ_ERC20O8bAGl1.approve.call(addressCXCvDXD, {from: accounts[2]});
//		const boolxc13100 = await GAZ_ERC20O8bAGl1.approve.call(addressFYxV8Za, uintNTg1pZN, {from: accounts[0]});
//		const boolCNFVLXC = await GAZ_ERC20O8bAGl1.transfer.call(addressiXyeem7, uintGs1hwf6, {from: accounts[2]});

		await expect(GAZ_ERC20O8bAGl1.approve.call(addressCXCvDXD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20KsUifQE = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressf1Jj8wj = accounts[0]
		const uintNjQUqWB = BigInt("13")
		const addressm41HXEt = accounts[2]
		const uintaEcQooP = BigInt("1198")
		const addressRrr3HtU = accounts[2]
		const uintPvtqneT = BigInt("479")
		const addressdVQ5jtm = accounts[3]
		const boolWh5KDHs = await GAZ_ERC20KsUifQE.approve.call(addressf1Jj8wj, {from: accounts[2]});
		const boolWnd70xs = await GAZ_ERC20KsUifQE.transfer.call(addressm41HXEt, uintNjQUqWB, {from: accounts[1]});
		const boolYETiCbd = await GAZ_ERC20KsUifQE.approve.call(addressRrr3HtU, uintaEcQooP, {from: accounts[3]});
		const boolLLgEgMR = await GAZ_ERC20KsUifQE.approve.call(addressdVQ5jtm, uintPvtqneT, {from: accounts[4]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20DFA4pku = await GAZ_ERC20.new({from: accounts[4]});
		const addressjitR2XG = accounts[3]
		const uinttbaP5lt = BigInt("755")
		const addressKSxOW2N = accounts[1]
		const uintusEargT = BigInt("1587")
		const addressSejlbgt = accounts[0]
		const uintq0umILz = BigInt("350")
		const addresstKjJrVf = accounts[2]
		const uintPUbFcPb = BigInt("1182")
		const addressYUQC8OK = accounts[0]
		const addressapm7tBI = accounts[2]
//		const boolBNRa4nN = await GAZ_ERC20DFA4pku.approve.call(addressjitR2XG, {from: accounts[0]});
//		const boolZp6Pet7 = await GAZ_ERC20DFA4pku.transfer.call(addressKSxOW2N, uinttbaP5lt, {from: accounts[4]});
//		const boolAui54RN = await GAZ_ERC20DFA4pku.approve.call(addressSejlbgt, uintusEargT, {from: accounts[1]});
//		const boolCY3kEHi = await GAZ_ERC20DFA4pku.transfer.call(addresstKjJrVf, uintq0umILz, {from: accounts[1]});
//		const boolxEE0bkj = await GAZ_ERC20DFA4pku.transferFrom.call(addressapm7tBI, addressYUQC8OK, uintPUbFcPb, {from: accounts[0]});

		await expect(GAZ_ERC20DFA4pku.approve.call(addressjitR2XG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fpRRILi = await GAZ_ERC20.new({from: accounts[3]});
		const addressGEuo0GM = accounts[1]
		const uintyh5cUuu = BigInt("574")
		const addressgPCN7JL = accounts[5]
		const uintTr9TQ0u = BigInt("992")
		const addressXInzsrJ = accounts[0]
		const uintLQR1UKF = BigInt("217")
		const addressX5QwU2r = accounts[0]
		const addressdGUWjeb = accounts[1]
		const uintoloFnGG = BigInt("153")
		const addressArTGWh4 = "0x0000000000000000000000000000000000000001"
		const addressoJj9702 = accounts[3]
//		const boolGqvynlt = await GAZ_ERC20fpRRILi.approve.call(addressGEuo0GM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKNKagJA = await GAZ_ERC20fpRRILi.transfer.call(addressgPCN7JL, uintyh5cUuu, {from: accounts[4]});
//		const boolMuBKw6 = await GAZ_ERC20fpRRILi.transfer.call(addressXInzsrJ, uintTr9TQ0u, {from: accounts[4]});
//		const boolOedwMl = await GAZ_ERC20fpRRILi.approve.call(addressX5QwU2r, uintLQR1UKF, {from: accounts[3]});
//		const boolK67xuFt = await GAZ_ERC20fpRRILi.approve.call(addressdGUWjeb, {from: accounts[1]});
//		const booltkaNRJ = await GAZ_ERC20fpRRILi.transferFrom.call(addressoJj9702, addressArTGWh4, uintoloFnGG, {from: accounts[1]});

		await expect(GAZ_ERC20fpRRILi.approve.call(addressGEuo0GM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})