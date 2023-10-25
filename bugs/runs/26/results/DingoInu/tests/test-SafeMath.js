const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contract604dY6 = await SafeMath.new({from: accounts[3]});
		const bPtnOuCj = BigInt("1653")
		const amAPLnSl = BigInt("1460")
		const bMDWyIHZ = BigInt("1980")
		const a9YNRl0 = BigInt("1112")
		const bdbVc6hT = BigInt("1247")
		const ab8fvCLC = BigInt("398")
		const bkxyIhGq = BigInt("21")
		const a344yA9 = BigInt("1526")
		const bGppt8Qx = BigInt("1278")
		const aALYNwji = BigInt("40")
		const ceLFhB3J = await contract604dY6.safeSub.call(amAPLnSl, bPtnOuCj, {from: accounts[3]});
		const cdQzEoXb = await contract604dY6.safeMul.call(a9YNRl0, bMDWyIHZ, {from: accounts[0]});
		const cR9zzrRB = await contract604dY6.safeMul.call(ab8fvCLC, bdbVc6hT, {from: accounts[0]});
		const cNTLQrqi = await contract604dY6.safeAdd.call(a344yA9, bkxyIhGq, {from: accounts[2]});
		const cOv1SePt = await contract604dY6.safeSub.call(aALYNwji, bGppt8Qx, {from: accounts[2]});

		await expect(contract604dY6.safeSub.call(amAPLnSl, bPtnOuCj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractCAawHNj = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bCcpUwfW = BigInt("738")
		const apfZzFtT = BigInt("1866")
		const bF5qnmXM = BigInt("673")
		const aorLZ587 = BigInt("582")
		const bwN3zilt = BigInt("916")
		const aPbPuKW = BigInt("1448")
		const bQ1aB4l6 = BigInt("135")
		const aE8oVMmk = BigInt("1635")
		const bSykDcau = BigInt("480")
		const aEIEfLza = BigInt("597")
		const bBKv6P3 = BigInt("116")
		const augqQrO4 = BigInt("1798")
		const c1BToAk = await contractCAawHNj.safeSub.call(apfZzFtT, bCcpUwfW, {from: accounts[4]});
		const cOQ0qT3H = await contractCAawHNj.safeSub.call(aorLZ587, bF5qnmXM, {from: accounts[1]});
		const c1SUXnv = await contractCAawHNj.safeAdd.call(aPbPuKW, bwN3zilt, {from: accounts[3]});
		const cl34RnV = await contractCAawHNj.safeMul.call(aE8oVMmk, bQ1aB4l6, {from: accounts[1]});
		const cNoCVcem = await contractCAawHNj.safeDiv.call(aEIEfLza, bSykDcau, {from: accounts[0]});
		const caHfxBsD = await contractCAawHNj.safeMul.call(augqQrO4, bBKv6P3, {from: "0x0000000000000000000000000000000000000001"});
	});
})