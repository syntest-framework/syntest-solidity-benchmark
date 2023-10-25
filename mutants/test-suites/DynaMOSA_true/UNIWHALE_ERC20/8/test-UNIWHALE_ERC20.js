const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e6p7KTY = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintT5AjkV0 = BigInt("615")
		const uintNpaZLTI = BigInt("244")
		const uintqDTs9cL = BigInt("551")
		const uintiC8y4Y9 = BigInt("759")
		const uint256xwWorm3 = await UNIWHALE_ERC20e6p7KTY.viewSale.call({from: accounts[0]});
//		const uint256TbOYsSy = await UNIWHALE_ERC20e6p7KTY.startAirdrop.call(uintiC8y4Y9, uintqDTs9cL, uintNpaZLTI, uintT5AjkV0, {from: accounts[0]});
//		const uint256WNe1468 = await UNIWHALE_ERC20e6p7KTY.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20e6p7KTY.startAirdrop.call(uintiC8y4Y9, uintqDTs9cL, uintNpaZLTI, uintT5AjkV0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20oFYLb4l = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJYyBvH = accounts[3]
		const addresseWQNrTF = accounts[3]
		const boolIHUJ8GG = await UNIWHALE_ERC20oFYLb4l.tokenSale.call(addressJYyBvH, {from: accounts[3]});
		const boolUfbDQ5Z = await UNIWHALE_ERC20oFYLb4l.tokenSale.call(addresseWQNrTF, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20pqEwFBF = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintBPL0KfD = BigInt("306")
		const uintspM9LdE = BigInt("432")
		const uintlDXLdoX = BigInt("1523")
		const uintHml7QqA = BigInt("1659")
		const uint256nHilLKU = await UNIWHALE_ERC20pqEwFBF.viewAirdrop.call({from: accounts[4]});
		const uint256KzT77Db = await UNIWHALE_ERC20pqEwFBF.viewSale.call({from: accounts[1]});
//		const uint256S9Smhiz = await UNIWHALE_ERC20pqEwFBF.startAirdrop.call(uintHml7QqA, uintlDXLdoX, uintspM9LdE, uintBPL0KfD, {from: accounts[4]});

		await expect(UNIWHALE_ERC20pqEwFBF.startAirdrop.call(uintHml7QqA, uintlDXLdoX, uintspM9LdE, uintBPL0KfD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cou3Ak7 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressHhc931t = accounts[3]
		const uint256LAFNyX8 = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolZec8vC7 = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressHhc931t, {from: accounts[3]});

		await expect(UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressHhc931t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cou3Ak7 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintUdCMtqJ = BigInt("73")
		const uintju8T7QB = BigInt("1047")
		const uintqFcwZf1 = BigInt("683")
		const uintU7dL6n = BigInt("1333")
		const addressa89FN9W = accounts[3]
		const uint256be9YsC = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: accounts[1]});
		const uint256r3WpmFJ = await UNIWHALE_ERC20cou3Ak7.startAirdrop.call(uintU7dL6n, uintqFcwZf1, uintju8T7QB, uintUdCMtqJ, {from: accounts[4]});
		const uint256LAFNyX8 = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfAF89lL = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressa89FN9W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressa89FN9W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cou3Ak7 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintKqoAocp = BigInt("73")
		const uintBeqr4l0 = BigInt("1047")
		const uintGsMzQ20 = BigInt("683")
		const uintxEzLyj = BigInt("1333")
		const addressDBCu3NG = accounts[0]
		const addressGMPD5u = accounts[3]
		const uint256be9YsC = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: accounts[1]});
		const uint256r3WpmFJ = await UNIWHALE_ERC20cou3Ak7.startAirdrop.call(uintxEzLyj, uintGsMzQ20, uintBeqr4l0, uintKqoAocp, {from: accounts[4]});
//		const boolqakhBp = await UNIWHALE_ERC20cou3Ak7.getAirdrop.call(addressDBCu3NG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LAFNyX8 = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfAF89lL = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressGMPD5u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20cou3Ak7.getAirdrop.call(addressDBCu3NG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cou3Ak7 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintwKysWEQ = BigInt("73")
		const uintHUHh7Bs = BigInt("1047")
		const uintIoxnLWv = BigInt("683")
		const uintTtcfy6w = BigInt("1333")
		const uintDt8ZVGW = BigInt("31")
		const uintsTrsQva = BigInt("1182")
		const uintNT0Pc7E = BigInt("386")
		const uintOAvXFlc = BigInt("1050")
		const uintIV9liNI = BigInt("1533")
		const addressJDz15g9 = accounts[3]
		const uint256be9YsC = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: accounts[1]});
		const uint256r3WpmFJ = await UNIWHALE_ERC20cou3Ak7.startAirdrop.call(uintTtcfy6w, uintIoxnLWv, uintHUHh7Bs, uintwKysWEQ, {from: accounts[4]});
		const uint256sTv0G3h = await UNIWHALE_ERC20cou3Ak7.startSale.call(uintIV9liNI, uintOAvXFlc, uintNT0Pc7E, uintsTrsQva, uintDt8ZVGW, {from: accounts[4]});
		const uint256LAFNyX8 = await UNIWHALE_ERC20cou3Ak7.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfAF89lL = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressJDz15g9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressJDz15g9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cou3Ak7 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressllpF7ra = accounts[3]
		const addressoueewmB = accounts[2]
//		await UNIWHALE_ERC20cou3Ak7.clearETH.call({from: accounts[4]});
//		const boolZec8vC7 = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressllpF7ra, {from: accounts[3]});
//		const boolR7LRdE1 = await UNIWHALE_ERC20cou3Ak7.tokenSale.call(addressoueewmB, {from: accounts[3]});

		await expect(UNIWHALE_ERC20cou3Ak7.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})