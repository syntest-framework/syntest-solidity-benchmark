const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOqkFYXji = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfWbcI9 = BigInt("153")
		const addresshGTD4mq = accounts[5]
		const uintjvRsp0M = BigInt("680")
		const uintUtNSlnw = BigInt("1583")
		const uintnHEw3Od = BigInt("1548")
		const uintVrswuZd = BigInt("977")
		const uintzGES5q9 = BigInt("332")
		const addressg8quzWL = accounts[4]
		const boolQSlVh6z = await FrogDAOqkFYXji.approve.call(addresshGTD4mq, uintfWbcI9, {from: accounts[1]});
		const uintfy9JK4 = await FrogDAOqkFYXji.safeDiv.call(uintUtNSlnw, uintjvRsp0M, {from: accounts[4]});
		const uintBUpy6zV = await FrogDAOqkFYXji.safeMul.call(uintVrswuZd, uintnHEw3Od, {from: accounts[1]});
		const booleJnnARk = await FrogDAOqkFYXji.transfer.call(addressg8quzWL, uintzGES5q9, {from: accounts[0]});
		const uintPSGFyb4 = await FrogDAOqkFYXji.totalSupply.call({from: accounts[4]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOXSts7gp = await FrogDAO.new({from: accounts[3]});
		const addresstnglDKp = accounts[0]
		const addressELWReDm = accounts[2]
		const uintWOxR6H8 = BigInt("1541")
		const addressR5vXMsW = accounts[4]
		const uintVKQUeoj = await FrogDAOXSts7gp.allowance.call(addressELWReDm, addresstnglDKp, {from: accounts[3]});
		const boolYASXQZ1 = await FrogDAOXSts7gp.transfer.call(addressR5vXMsW, uintWOxR6H8, {from: accounts[4]});

		assert.equal(uintVKQUeoj, BigInt("0"))
		await expect(FrogDAOXSts7gp.transfer.call(addressR5vXMsW, uintWOxR6H8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOLbMsNn7 = await FrogDAO.new({from: accounts[1]});
		const addressAuAFTPW = accounts[3]
		const addressJEah0Kc = accounts[1]
		const addressWgzCGcX = accounts[3]
		const addressrn1u1a = accounts[4]
		const addressA3tTet1 = accounts[2]
		const addressEoS0GG5 = accounts[1]
		const uintVniNt3V = BigInt("896")
		const uintJPLVQAw = BigInt("98")
		const uintUfSQJH = await FrogDAOLbMsNn7.allowance.call(addressJEah0Kc, addressAuAFTPW, {from: accounts[3]});
		const uintqsxQwnI = await FrogDAOLbMsNn7.allowance.call(addressrn1u1a, addressWgzCGcX, {from: accounts[4]});
		const uintb8iU4h6 = await FrogDAOLbMsNn7.allowance.call(addressEoS0GG5, addressA3tTet1, {from: accounts[3]});
		const uintu0L9sU4 = await FrogDAOLbMsNn7.safeMul.call(uintJPLVQAw, uintVniNt3V, {from: accounts[4]});
		const uintXiymazA = await FrogDAOLbMsNn7.totalSupply.call({from: accounts[1]});

		assert.equal(uintUfSQJH, BigInt("0"))
		assert.equal(uintXiymazA, BigInt("1000000000000000000000000"))
		assert.equal(uintb8iU4h6, BigInt("0"))
		assert.equal(uintqsxQwnI, BigInt("0"))
		assert.equal(uintu0L9sU4, BigInt("87808"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOZ5PkKtL = await FrogDAO.new({from: accounts[2]});
		const uintVjNbcR6 = BigInt("552")
		const addressX4qM35u = accounts[2]
		const addressgLYim2A = accounts[1]
		const uintWwAH1ez = BigInt("1090")
		const uintMicIp0 = BigInt("136")
		const uintk65iwGk = BigInt("1999")
		const uintx4pmAHH = BigInt("65")
		const addresssVM55bY = accounts[0]
		const addressapcW0Wd = accounts[0]
		const uinteQblEJs = await FrogDAOZ5PkKtL.totalSupply.call({from: accounts[3]});
		const bool2uXeDv = await FrogDAOZ5PkKtL.transferFrom.call(addressgLYim2A, addressX4qM35u, uintVjNbcR6, {from: accounts[4]});
		const uinteArlYMe = await FrogDAOZ5PkKtL.safeDiv.call(uintMicIp0, uintWwAH1ez, {from: accounts[4]});
		const uintNFlm5X4 = await FrogDAOZ5PkKtL.safeAdd.call(uintx4pmAHH, uintk65iwGk, {from: accounts[3]});
		const uintCV42Dnh = await FrogDAOZ5PkKtL.allowance.call(addressapcW0Wd, addresssVM55bY, {from: accounts[4]});

		assert.equal(uinteQblEJs, BigInt("1000000000000000000000000"))
		await expect(FrogDAOZ5PkKtL.transferFrom.call(addressgLYim2A, addressX4qM35u, uintVjNbcR6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOp7YvoXZ = await FrogDAO.new({from: accounts[2]});
		const uintdew0c38 = BigInt("615")
		const uintE3cYJSI = BigInt("1660")
		const uinti3ppNp = BigInt("1027")
		const addresslo8SUb = accounts[5]
		const uinteas3Soz = await FrogDAOp7YvoXZ.safeSub.call(uintE3cYJSI, uintdew0c38, {from: accounts[3]});
		const boolqibbkBt = await FrogDAOp7YvoXZ.approve.call(addresslo8SUb, uinti3ppNp, {from: accounts[4]});

		assert.equal(boolqibbkBt, true)
		assert.equal(uinteas3Soz, BigInt("1045"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPo183V5 = await FrogDAO.new({from: accounts[2]});
		const uintwNXA18a = BigInt("249")
		const addressA0eGdx0 = accounts[1]
		const addressdT1Xn4g = accounts[4]
		const uintwe61fs = BigInt("1938")
		const addressjCjETdk = accounts[4]
		const uintvbDYsE = BigInt("1983")
		const uintmzq2hFZ = BigInt("1089")
		const boolXHGer3 = await FrogDAOPo183V5.transfer.call(addressA0eGdx0, uintwNXA18a, {from: accounts[2]});
		const uintUUY4oW5 = await FrogDAOPo183V5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintakC4kM = await FrogDAOPo183V5.balanceOf.call(addressdT1Xn4g, {from: accounts[0]});
		const boolEWyvVoO = await FrogDAOPo183V5.approve.call(addressjCjETdk, uintwe61fs, {from: accounts[3]});
		const uinth8kzCzv = await FrogDAOPo183V5.safeSub.call(uintmzq2hFZ, uintvbDYsE, {from: accounts[3]});

		assert.equal(boolEWyvVoO, true)
		assert.equal(boolXHGer3, true)
		assert.equal(uintUUY4oW5, BigInt("1000000000000000000000000"))
		assert.equal(uintakC4kM, BigInt("0"))
		await expect(FrogDAOPo183V5.safeSub.call(uintmzq2hFZ, uintvbDYsE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})