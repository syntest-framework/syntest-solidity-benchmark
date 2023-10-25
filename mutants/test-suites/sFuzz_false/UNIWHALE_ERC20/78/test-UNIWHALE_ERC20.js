const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20nxSJncX = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZAKb0ae = BigInt("642")
		const uintpGpF453 = BigInt("1554")
		const uinti5AsY3f = BigInt("650")
		const uintGM9onbv = BigInt("839")
		const uintNoUcdn2 = BigInt("194")
		const addressehL8XE = accounts[4]
		const uint256blijR4p = await UNIWHALE_ERC20nxSJncX.startSale.call(uintNoUcdn2, uintGM9onbv, uinti5AsY3f, uintpGpF453, uintZAKb0ae, {from: accounts[0]});
		const uint256jT6PG9J = await UNIWHALE_ERC20nxSJncX.viewSale.call({from: accounts[4]});
		const booln7DX4OV = await UNIWHALE_ERC20nxSJncX.getAirdrop.call(addressehL8XE, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20YKPuwAL = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressHJfsHZQ = accounts[3]
		const uintRevOZGt = BigInt("1215")
		const uintrKUT2Lp = BigInt("1320")
		const uintkEnV7yf = BigInt("1291")
		const uintIn3dqEn = BigInt("1493")
//		await UNIWHALE_ERC20YKPuwAL.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolVLVgglR = await UNIWHALE_ERC20YKPuwAL.getAirdrop.call(addressHJfsHZQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rssZmJl = await UNIWHALE_ERC20YKPuwAL.viewSale.call({from: accounts[3]});
//		const uint256RlDl34Z = await UNIWHALE_ERC20YKPuwAL.startAirdrop.call(uintIn3dqEn, uintkEnV7yf, uintrKUT2Lp, uintRevOZGt, {from: accounts[0]});

		await expect(UNIWHALE_ERC20YKPuwAL.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20DlIRNwT = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressnfsCVlB = accounts[1]
//		const boolAddJkOA = await UNIWHALE_ERC20DlIRNwT.getAirdrop.call(addressnfsCVlB, {from: accounts[4]});
//		const uint256S0YpOpC = await UNIWHALE_ERC20DlIRNwT.viewSale.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20DlIRNwT.getAirdrop.call(addressnfsCVlB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20JD0EhdG = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintYDC2Cl = BigInt("1794")
		const uintOOAwpk9 = BigInt("1500")
		const uintJ8z39LV = BigInt("381")
		const uintC9bbk03 = BigInt("1204")
		const uintg4VHHX2 = BigInt("104")
		const uintj4M25i = BigInt("801")
		const uintQN694g = BigInt("149")
		const uintaaJnLCI = BigInt("786")
		const uintftMNgr = BigInt("924")
		const uint256R3uxoga = await UNIWHALE_ERC20JD0EhdG.viewAirdrop.call({from: accounts[1]});
		const uint256JFKq2eq = await UNIWHALE_ERC20JD0EhdG.startAirdrop.call(uintC9bbk03, uintJ8z39LV, uintOOAwpk9, uintYDC2Cl, {from: accounts[2]});
//		const uint256R0k6hDH = await UNIWHALE_ERC20JD0EhdG.startSale.call(uintftMNgr, uintaaJnLCI, uintQN694g, uintj4M25i, uintg4VHHX2, {from: accounts[3]});
//		await UNIWHALE_ERC20JD0EhdG.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20JD0EhdG.startSale.call(uintftMNgr, uintaaJnLCI, uintQN694g, uintj4M25i, uintg4VHHX2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hZJNLLs = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addresskucNxQ1 = accounts[4]
		const uint256xT5ZslU = await UNIWHALE_ERC20hZJNLLs.viewAirdrop.call({from: accounts[2]});
//		const boollXylke5 = await UNIWHALE_ERC20hZJNLLs.tokenSale.call(addresskucNxQ1, {from: accounts[1]});
//		const uint256clq1jzv = await UNIWHALE_ERC20hZJNLLs.viewSale.call({from: accounts[1]});
//		await UNIWHALE_ERC20hZJNLLs.clearETH.call({from: accounts[0]});
//		await UNIWHALE_ERC20hZJNLLs.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20hZJNLLs.tokenSale.call(addresskucNxQ1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20fjhe9HF = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addresseXGv63D = accounts[1]
		const addressaSsimZ = accounts[4]
		const uint256wabDC0M = await UNIWHALE_ERC20fjhe9HF.viewSale.call({from: accounts[1]});
//		const boolBXTVwZ = await UNIWHALE_ERC20fjhe9HF.tokenSale.call(addresseXGv63D, {from: accounts[3]});
//		const uint256aduyjJz = await UNIWHALE_ERC20fjhe9HF.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolw4sPeqD = await UNIWHALE_ERC20fjhe9HF.tokenSale.call(addressaSsimZ, {from: accounts[0]});

		await expect(UNIWHALE_ERC20fjhe9HF.tokenSale.call(addresseXGv63D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20JSGkJ2N = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintP7cL8GG = BigInt("1746")
		const uintIARkcD = BigInt("9")
		const uintbu8sqXC = BigInt("1762")
		const uintoQLgmc = BigInt("120")
		const uintG2N1qdC = BigInt("1771")
		const uint256rVCZa6G = await UNIWHALE_ERC20JSGkJ2N.startSale.call(uintG2N1qdC, uintoQLgmc, uintbu8sqXC, uintIARkcD, uintP7cL8GG, {from: accounts[0]});
		const uint256b54RIr = await UNIWHALE_ERC20JSGkJ2N.viewSale.call({from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20JSGkJ2N = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uint256k6O8qSz = await UNIWHALE_ERC20JSGkJ2N.viewSale.call({from: accounts[2]});
//		await UNIWHALE_ERC20JSGkJ2N.clearETH.call({from: accounts[0]});
//		const uint256b54RIr = await UNIWHALE_ERC20JSGkJ2N.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20JSGkJ2N.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})