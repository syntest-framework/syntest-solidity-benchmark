const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20J5EVIg = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintzyQl9L5 = BigInt("1338")
		const uintnpK5Nuh = BigInt("414")
		const uintSby8IfQ = BigInt("1841")
		const uintE7knUWs = BigInt("1763")
		const uint256ZHmHjeA = await UNIWHALE_ERC20J5EVIg.startAirdrop.call(uintE7knUWs, uintSby8IfQ, uintnpK5Nuh, uintzyQl9L5, {from: accounts[2]});
		const uint256mH4sEy4 = await UNIWHALE_ERC20J5EVIg.viewAirdrop.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20J5EVIg.startAirdrop.call(uintE7knUWs, uintSby8IfQ, uintnpK5Nuh, uintzyQl9L5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20PJKlRTd = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintGyPtcPV = BigInt("4")
		const uintLgb6jTc = BigInt("643")
		const uintY7XLmaI = BigInt("73")
		const uintHQ28j0 = BigInt("1255")
		const uintukYVHgF = BigInt("1379")
		const uintAZBooNY = BigInt("781")
		const uintaZVDhQN = BigInt("888")
		const uintUBJjU1x = BigInt("2037")
		const uintd4XCQ1u = BigInt("359")
		const uintfY95wRv = BigInt("1535")
		const uint256vldKDSS = await UNIWHALE_ERC20PJKlRTd.viewSale.call({from: accounts[4]});
		const uint256wo8u6EF = await UNIWHALE_ERC20PJKlRTd.startSale.call(uintukYVHgF, uintHQ28j0, uintY7XLmaI, uintLgb6jTc, uintGyPtcPV, {from: accounts[4]});
		const uint256YLetNMm = await UNIWHALE_ERC20PJKlRTd.startSale.call(uintfY95wRv, uintd4XCQ1u, uintUBJjU1x, uintaZVDhQN, uintAZBooNY, {from: accounts[1]});

		await expect(UNIWHALE_ERC20PJKlRTd.startSale.call(uintukYVHgF, uintHQ28j0, uintY7XLmaI, uintLgb6jTc, uintGyPtcPV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EeOjeil = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addresswm3Td5g = accounts[0]
		const addresshhYZ8gk = accounts[0]
		const uintvoA8R1l = BigInt("1267")
		const uintdb0RAS8 = BigInt("1792")
		const uintrTPsj5G = BigInt("1980")
		const uintCMo5UU5 = BigInt("1493")
		const uintZkOEZuz = BigInt("1797")
		const boolzzaYoPO = await UNIWHALE_ERC20EeOjeil.tokenSale.call(addresswm3Td5g, {from: accounts[1]});
		await UNIWHALE_ERC20EeOjeil.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256W11H1Cm = await UNIWHALE_ERC20EeOjeil.viewSale.call({from: accounts[2]});
		const boolmmiSM4m = await UNIWHALE_ERC20EeOjeil.tokenSale.call(addresshhYZ8gk, {from: accounts[2]});
		const uint256JgS2bu8 = await UNIWHALE_ERC20EeOjeil.startSale.call(uintZkOEZuz, uintCMo5UU5, uintrTPsj5G, uintdb0RAS8, uintvoA8R1l, {from: accounts[1]});
		const uint256CfDpi2a = await UNIWHALE_ERC20EeOjeil.viewAirdrop.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20EeOjeil.tokenSale.call(addresswm3Td5g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20V1UiQGn = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressk12kYue = accounts[4]
		const addressS15l5nc = accounts[4]
		const uint256ojtgtHh = await UNIWHALE_ERC20V1UiQGn.viewSale.call({from: accounts[1]});
		const boolasJqIkm = await UNIWHALE_ERC20V1UiQGn.getAirdrop.call(addressk12kYue, {from: accounts[2]});
		const boolJg5sFL8 = await UNIWHALE_ERC20V1UiQGn.getAirdrop.call(addressS15l5nc, {from: accounts[4]});
		const uint256oPqvvQ = await UNIWHALE_ERC20V1UiQGn.viewAirdrop.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20V1UiQGn.getAirdrop.call(addressk12kYue, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20FGRJORl = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressR3oJFJq = accounts[5]
		const uintWi8ZRpq = BigInt("1976")
		const uintsoBLtjw = BigInt("1262")
		const uintv1Qzln = BigInt("1481")
		const uintJ8mp86s = BigInt("858")
		const uintORU7NhL = BigInt("1928")
		const uintBCDrXi = BigInt("574")
		const uintwF4nDhG = BigInt("724")
		const uintxKrQzGt = BigInt("1576")
		const uintzbLC1tC = BigInt("197")
		const addressReZ1FsC = accounts[4]
		const addressuVipbxw = "0x0000000000000000000000000000000000000001"
		const uint256aTFCZ5L = await UNIWHALE_ERC20FGRJORl.viewAirdrop.call({from: accounts[1]});
		const boolAWvZa7o = await UNIWHALE_ERC20FGRJORl.getAirdrop.call(addressR3oJFJq, {from: accounts[4]});
		const uint256fgjdeoz = await UNIWHALE_ERC20FGRJORl.startAirdrop.call(uintJ8mp86s, uintv1Qzln, uintsoBLtjw, uintWi8ZRpq, {from: accounts[2]});
		const uint256702mXM = await UNIWHALE_ERC20FGRJORl.startSale.call(uintzbLC1tC, uintxKrQzGt, uintwF4nDhG, uintBCDrXi, uintORU7NhL, {from: accounts[5]});
		const booljIVaCQS = await UNIWHALE_ERC20FGRJORl.tokenSale.call(addressReZ1FsC, {from: accounts[4]});
		const booljDnOAO2 = await UNIWHALE_ERC20FGRJORl.tokenSale.call(addressuVipbxw, {from: accounts[2]});

		await expect(UNIWHALE_ERC20FGRJORl.getAirdrop.call(addressR3oJFJq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20mqoLzp = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqGVPpYW = BigInt("597")
		const uintb3EqxN8 = BigInt("1691")
		const uintigSvfDg = BigInt("834")
		const uintBw6KuCv = BigInt("1908")
		const addresshEhH5D3 = accounts[0]
		const uint256o78dI4p = await UNIWHALE_ERC20mqoLzp.viewAirdrop.call({from: accounts[5]});
		const uint256hs1Hs3s = await UNIWHALE_ERC20mqoLzp.viewAirdrop.call({from: accounts[1]});
		const uint256Zy858EL = await UNIWHALE_ERC20mqoLzp.startAirdrop.call(uintBw6KuCv, uintigSvfDg, uintb3EqxN8, uintqGVPpYW, {from: accounts[0]});
		const boolOg7IIuh = await UNIWHALE_ERC20mqoLzp.tokenSale.call(addresshEhH5D3, {from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20OrxHiGF = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintCGkq8mR = BigInt("1586")
		const uintK7shEl4 = BigInt("1049")
		const uintIFuAMUM = BigInt("1455")
		const uintTvRrU9D = BigInt("1113")
		const addressmdnHm5x = accounts[4]
		const addressGond4Q = accounts[4]
		const addressZALqE3b = accounts[2]
		const uint256FY9MLiP = await UNIWHALE_ERC20OrxHiGF.startAirdrop.call(uintTvRrU9D, uintIFuAMUM, uintK7shEl4, uintCGkq8mR, {from: accounts[3]});
		const boolxQ12uCL = await UNIWHALE_ERC20OrxHiGF.tokenSale.call(addressmdnHm5x, {from: accounts[5]});
		const booltkgc75B = await UNIWHALE_ERC20OrxHiGF.tokenSale.call(addressGond4Q, {from: accounts[3]});
		const boolMrL4O2o = await UNIWHALE_ERC20OrxHiGF.tokenSale.call(addressZALqE3b, {from: accounts[1]});

		await expect(UNIWHALE_ERC20OrxHiGF.tokenSale.call(addressmdnHm5x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20J5EVIg = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uinthxb3BLC = BigInt("210")
		const uintQifzppB = BigInt("609")
		const uintS0XGWsD = BigInt("455")
		const uintmDacKZW = BigInt("347")
		const uintGKEAkh1 = BigInt("304")
		const uintTAZ03oO = BigInt("1338")
		const uintGYTKUcm = BigInt("414")
		const uintfKM1Od8 = BigInt("1841")
		const uintgEskHrI = BigInt("1744")
		const uint256g2RG3VH = await UNIWHALE_ERC20J5EVIg.startSale.call(uintGKEAkh1, uintmDacKZW, uintS0XGWsD, uintQifzppB, uinthxb3BLC, {from: accounts[5]});
		const uint256ZHmHjeA = await UNIWHALE_ERC20J5EVIg.startAirdrop.call(uintgEskHrI, uintfKM1Od8, uintGYTKUcm, uintTAZ03oO, {from: accounts[2]});

		await expect(UNIWHALE_ERC20J5EVIg.startAirdrop.call(uintgEskHrI, uintfKM1Od8, uintGYTKUcm, uintTAZ03oO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20J5EVIg = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uinttuFTNE1 = BigInt("1345")
		const uintAHV20EH = BigInt("414")
		const uintsKYHawE = BigInt("1841")
		const uintdAMxDoh = BigInt("1763")
		const addresstk3sQZi = accounts[3]
		await UNIWHALE_ERC20J5EVIg.clearETH.call({from: accounts[5]});
		const uint256ZHmHjeA = await UNIWHALE_ERC20J5EVIg.startAirdrop.call(uintdAMxDoh, uintsKYHawE, uintAHV20EH, uinttuFTNE1, {from: accounts[2]});
		const uint256LRjDAd5 = await UNIWHALE_ERC20J5EVIg.viewSale.call({from: accounts[1]});
		const boolrbYi5Sp = await UNIWHALE_ERC20J5EVIg.tokenSale.call(addresstk3sQZi, {from: accounts[1]});

		await expect(UNIWHALE_ERC20J5EVIg.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})