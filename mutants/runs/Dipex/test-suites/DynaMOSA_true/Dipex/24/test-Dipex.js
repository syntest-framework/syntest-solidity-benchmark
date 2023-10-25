const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringE43A2PU = "qRfUqqNocyGNkMYtdiFcQPcUdH8me"
		const stringYMT0po8 = "mCBBSXazzgmGFuK5sr97fp4y2e8ruv3PnEUXt3fv5TTEvJZeMgOZTk0KL82hF6laRtbNMJPPlUd0Zhx7OSK"
		const uintXku2sQ2 = BigInt("224")
		const DipexkN46Kp = await Dipex.new(stringE43A2PU, stringYMT0po8, uintXku2sQ2, {from: accounts[3]});
		const uintwDzM66r = BigInt("1231")
		const addressBVZ63jE = accounts[2]
		const uintfNCtVaG = BigInt("1573")
		const addressnac17fp = accounts[0]
		const addressB716rTR = accounts[1]
		const uintTd8XHcc = BigInt("810")
		const addressJ0muvJI = accounts[2]
		const addresslglBWn = accounts[4]
		const boolmbEPG3m = await DipexkN46Kp.approveAndCall.call(addressBVZ63jE, uintwDzM66r, {from: accounts[0]});
		const booluQdqTbU = await DipexkN46Kp.approve.call(addressnac17fp, uintfNCtVaG, {from: "0x0000000000000000000000000000000000000001"});
		const boolMDCOVsT = await DipexkN46Kp.transferownership.call(addressB716rTR, {from: accounts[2]});
		const boolUTHKvhA = await DipexkN46Kp.transferFrom.call(addresslglBWn, addressJ0muvJI, uintTd8XHcc, {from: accounts[1]});

		await expect(DipexkN46Kp.approveAndCall.call(addressBVZ63jE, uintwDzM66r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringGUdnPT4 = "I7GXNp4Gj5xFkxiCl3VfwtHPxA6eTsKrnCUOXaUd4QjHJMM6dl6F7VmUQAWG26kW2aosd2XH96PKe2GCexhlWT94fUzKwasTwC"
		const stringy5WuKU1 = "gyU6qhdCFYrPCDFojzSvzxzaIPboHsGNt53WbGdziUazTIo4aL78YKWxsc1"
		const uintcS3aTvO = BigInt("488")
		const DipexyHDJGhc = await Dipex.new(stringGUdnPT4, stringy5WuKU1, uintcS3aTvO, {from: accounts[0]});
		const addressrYSyZIq = accounts[5]
		const uintoaUygv5 = BigInt("279")
		const addressBJGSVok = accounts[3]
		const addressBLlTMbP = accounts[2]
		const uintl4GtLKo = BigInt("612")
		const addresshUBc8JQ = accounts[0]
		const uintli8H5k8 = BigInt("1508")
		const addressemh9bta = accounts[1]
		const addressCfQnfwU = accounts[4]
		const boolO08EDR1 = await DipexyHDJGhc.transferownership.call(addressrYSyZIq, {from: accounts[1]});
		const boolqYdWjIc = await DipexyHDJGhc.transferFrom.call(addressBLlTMbP, addressBJGSVok, uintoaUygv5, {from: accounts[2]});
		const boolAL4cmsB = await DipexyHDJGhc.transfer.call(addresshUBc8JQ, uintl4GtLKo, {from: accounts[0]});
		const boolvcFH829 = await DipexyHDJGhc.transferFrom.call(addressCfQnfwU, addressemh9bta, uintli8H5k8, {from: accounts[1]});

		await expect(DipexyHDJGhc.transferownership.call(addressrYSyZIq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringFC0U9d4 = "aUWCiCYSNwPqoBUdy6dgnauN"
		const stringrzgT8Sp = "6dRwyVRLP4XTa0VDWWwdhovdWbgO1YxL2A"
		const uintTluFABw = BigInt("1477")
		const DipexcaPBr8f = await Dipex.new(stringFC0U9d4, stringrzgT8Sp, uintTluFABw, {from: "0x0000000000000000000000000000000000000001"});
		const uintE5ZqVnp = BigInt("1438")
		const addressxulaJWV = accounts[0]
		const addresslslu3Kz = accounts[0]
		const uintwyltLVw = BigInt("1800")
		const addressPxhK5Ek = accounts[2]
		const boolqCR7lFy = await DipexcaPBr8f.transferFrom.call(addresslslu3Kz, addressxulaJWV, uintE5ZqVnp, {from: accounts[1]});
		const boolngz584g = await DipexcaPBr8f.approve.call(addressPxhK5Ek, uintwyltLVw, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringjD1IMC7 = "Vy5NeLKVS25bLjGccFQM2VhLNcJnUxfBWaOvtGJEOqTQCuGzQWvi5h3V"
		const stringouUC70y = "FVqZsSN5mPk4K4nIonponioXOYIXU1"
		const uinthGyxaiW = BigInt("1981")
		const DipexEW7e4yK = await Dipex.new(stringjD1IMC7, stringouUC70y, uinthGyxaiW, {from: accounts[1]});
		const uintd66RSeb = BigInt("1306")
		const addressplKr8AM = accounts[2]
		const uintdeKPclD = BigInt("1029")
		const addressln6nImG = accounts[4]
		const addresstH34j6Q = accounts[1]
		const uintWDi67QQ = BigInt("1798")
		const addressz5OFjmf = "0x0000000000000000000000000000000000000001"
		const uintwYacz0A = BigInt("15")
		const addressMtdvMJ1 = accounts[2]
		const uintae6eBpt = BigInt("1524")
		const addressQX8HWIy = accounts[1]
		const address7pMZzN = accounts[2]
		const boolw1vQrc = await DipexEW7e4yK.approveAndCall.call(addressplKr8AM, uintd66RSeb, {from: accounts[1]});
		const boolThKV7BB = await DipexEW7e4yK.transferFrom.call(addresstH34j6Q, addressln6nImG, uintdeKPclD, {from: accounts[1]});
		const boollflKUNE = await DipexEW7e4yK.approveAndCall.call(addressz5OFjmf, uintWDi67QQ, {from: accounts[3]});
		const booldcqHn3 = await DipexEW7e4yK.approve.call(addressMtdvMJ1, uintwYacz0A, {from: accounts[2]});
		const boolcYE80F = await DipexEW7e4yK.transferFrom.call(address7pMZzN, addressQX8HWIy, uintae6eBpt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolThKV7BB, true)
		assert.equal(boolw1vQrc, true)
		await expect(DipexEW7e4yK.approveAndCall.call(addressz5OFjmf, uintWDi67QQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringjCgmnLA = "ml6sBf3NFbfdpYzENjgTQBqjofA5NBRUmoQsTmDOShTdAIDCYR"
		const stringygwFrdN = "I0QGnDI1g4pssK"
		const uintVDEwRpQ = BigInt("1260")
		const DipexzKZQYnh = await Dipex.new(stringjCgmnLA, stringygwFrdN, uintVDEwRpQ, {from: accounts[1]});
		const uintytqfdWk = BigInt("104")
		const addressqpM8NCz = accounts[4]
		const addressyY0HVWj = "0x0000000000000000000000000000000000000001"
		const uintsvi7KR = BigInt("1155")
		const addressdR364Fv = accounts[3]
		const uint8KWX5J = BigInt("1268")
		const addressnwHJ7OC = accounts[3]
		const uintjwcpZMl = BigInt("1190")
		const addressfRPn1xz = accounts[1]
		const boolmObVil = await DipexzKZQYnh.transferFrom.call(addressyY0HVWj, addressqpM8NCz, uintytqfdWk, {from: accounts[0]});
		const boolJE7Wtuy = await DipexzKZQYnh.approve.call(addressdR364Fv, uintsvi7KR, {from: accounts[2]});
		const booluWR4eT6 = await DipexzKZQYnh.approveAndCall.call(addressnwHJ7OC, uint8KWX5J, {from: accounts[0]});
		const boolzeEaJx0 = await DipexzKZQYnh.approveAndCall.call(addressfRPn1xz, uintjwcpZMl, {from: accounts[0]});

		await expect(DipexzKZQYnh.transferFrom.call(addressyY0HVWj, addressqpM8NCz, uintytqfdWk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringuuIWgYm = "A2edCkkzccMVB4Vlk2s4eSlT2qEGppG2Ef4eYp9fooqRMA2emih9NmYekZe4WT3QlDNwKKejiVIEXYLFbY47h"
		const stringbzg0yow = "TyHWp606X3ZrjGM49szBavUKjEpbK8t4MAmy9p4erM8HjbmfBYYTTMvC6dsOzLO1g3q50Fe7iahFqxkHZ96Z42s1b0LS2MK"
		const uinticW10Dm = BigInt("1491")
		const DipexNAkraTT = await Dipex.new(stringuuIWgYm, stringbzg0yow, uinticW10Dm, {from: accounts[0]});
		const uintjywiths = BigInt("1481")
		const addressv3wg6yw = "0x0000000000000000000000000000000000000001"
		const uintwxhNnEB = BigInt("1436")
		const addressM225b9q = accounts[3]
		const addressnO7ufP = accounts[4]
		const uintKacUhcO = BigInt("93")
		const addressZ5hGV72 = accounts[0]
		const uinthsuadAA = BigInt("1700")
		const addresssz1zKXj = accounts[0]
		const addressb2i2WsZ = accounts[2]
		const boolcVN9K3r = await DipexNAkraTT.approve.call(addressv3wg6yw, uintjywiths, {from: accounts[2]});
		const boolmqJmjP = await DipexNAkraTT.transferFrom.call(addressnO7ufP, addressM225b9q, uintwxhNnEB, {from: "0x0000000000000000000000000000000000000001"});
		const boolDI725f8 = await DipexNAkraTT.approve.call(addressZ5hGV72, uintKacUhcO, {from: accounts[0]});
		const boolBkKCbi = await DipexNAkraTT.transferFrom.call(addressb2i2WsZ, addresssz1zKXj, uinthsuadAA, {from: accounts[1]});

		assert.equal(boolcVN9K3r, true)
		await expect(DipexNAkraTT.transferFrom.call(addressnO7ufP, addressM225b9q, uintwxhNnEB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringPxxBxO = "QJjhFnMUHjNXoXMuGdxnombKo"
		const stringGhAzXa = "81d"
		const uintyY1Sqpj = BigInt("93")
		const DipexKI02Qrw = await Dipex.new(stringPxxBxO, stringGhAzXa, uintyY1Sqpj, {from: accounts[2]});
		const uintMzj7tkP = BigInt("249")
		const addressx0ua27P = accounts[2]
		const uintBXu0A3W = BigInt("387")
		const addressAWRyCBh = accounts[4]
		const boolQoC99aY = await DipexKI02Qrw.transfer.call(addressx0ua27P, uintMzj7tkP, {from: accounts[0]});
		const bool25hvtt = await DipexKI02Qrw.approve.call(addressAWRyCBh, uintBXu0A3W, {from: accounts[1]});

		await expect(DipexKI02Qrw.transfer.call(addressx0ua27P, uintMzj7tkP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringxqwNWRd = "fAHMhKe5TG7Znhul6qKLjSxmU7CDEvRRpIhzuzkQguHiGitadS4Rz5Am0ofNg61RaBqmx4CgrcDeEFVbMJu6rBMef"
		const stringBTJxsjH = "V3"
		const uintKVG8kGg = BigInt("1336")
		const DipexANYEqoG = await Dipex.new(stringxqwNWRd, stringBTJxsjH, uintKVG8kGg, {from: accounts[3]});
		const uintgtgHeqH = BigInt("368")
		const addressSBEWyx = accounts[0]
		const uintyXgqBKB = BigInt("156")
		const addresswyff36 = accounts[0]
		const uintcKtgwQ = BigInt("1442")
		const addressO2k1a5g = accounts[2]
		const uintcClToou = BigInt("1121")
		const addressx0PAGLv = accounts[0]
		const uintC6AjxCj = BigInt("307")
		const addressuSJ0si1 = accounts[3]
		const boolv4bXQ7Q = await DipexANYEqoG.transfer.call(addressSBEWyx, uintgtgHeqH, {from: accounts[1]});
		const boolgxdGPvU = await DipexANYEqoG.approveAndCall.call(addresswyff36, uintyXgqBKB, {from: accounts[0]});
		const boolRU9PWE2 = await DipexANYEqoG.transfer.call(addressO2k1a5g, uintcKtgwQ, {from: accounts[3]});
		const boolA94Q9qp = await DipexANYEqoG.transfer.call(addressx0PAGLv, uintcClToou, {from: accounts[0]});
		const boolClGJqqu = await DipexANYEqoG.approve.call(addressuSJ0si1, uintC6AjxCj, {from: accounts[4]});

		await expect(DipexANYEqoG.transfer.call(addressSBEWyx, uintgtgHeqH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringUoMyKI = "H0DGVp98pBOpFOucHF"
		const stringKHYzJnz = "z2uC8Cy3qst4OCYIZEt6Q"
		const uintdrVl5u0 = BigInt("266")
		const DipexXXV4zbY = await Dipex.new(stringUoMyKI, stringKHYzJnz, uintdrVl5u0, {from: accounts[0]});
		const addressaHjJ88k = accounts[3]
		const uintCD6vYo8 = BigInt("399")
		const addressf9ZOa3s = accounts[5]
		const uintCmDOw7K = BigInt("204")
		const addresshRb9Swy = accounts[2]
		const boolAueZhKV = await DipexXXV4zbY.transferownership.call(addressaHjJ88k, {from: accounts[0]});
		const boolbCWmPCI = await DipexXXV4zbY.approve.call(addressf9ZOa3s, uintCD6vYo8, {from: accounts[5]});
		const boolWNSg7Q = await DipexXXV4zbY.transfer.call(addresshRb9Swy, uintCmDOw7K, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAueZhKV, true)
		assert.equal(boolbCWmPCI, true)
		await expect(DipexXXV4zbY.transfer.call(addresshRb9Swy, uintCmDOw7K, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringxl7R5ez = "mNDiFgHVbDU7hzgQsDDkzMy7QYzjE4028DWFRf7fHnUgGqVjIobvWVIrzer1"
		const stringyXn5uAy = "TOG3JYGLHDSmka6HtkkvJghx2IA1EmaldQR3ejH6vv"
		const uintrg5JYQ = BigInt("493")
		const DipexImduKwr = await Dipex.new(stringxl7R5ez, stringyXn5uAy, uintrg5JYQ, {from: accounts[2]});
		const uintE9b7Fj = BigInt("0")
		const addressU6m91r = accounts[4]
		const uintXXLG95A = BigInt("1595")
		const addressymBLzzf = accounts[4]
		const addressFkHudAO = accounts[2]
		const addresscdK3IAR = accounts[0]
		const boolPrlAXzz = await DipexImduKwr.transfer.call(addressU6m91r, uintE9b7Fj, {from: accounts[2]});
		const boolDwwqEtC = await DipexImduKwr.approveAndCall.call(addressymBLzzf, uintXXLG95A, {from: accounts[2]});
		const boolHCAfDfF = await DipexImduKwr.transferownership.call(addressFkHudAO, {from: accounts[0]});
		const boolNKyhFKO = await DipexImduKwr.transferownership.call(addresscdK3IAR, {from: accounts[2]});

		assert.equal(boolDwwqEtC, true)
		assert.equal(boolPrlAXzz, true)
		await expect(DipexImduKwr.transferownership.call(addressFkHudAO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringjCgmnLA = "ml6sBf3NFbfdpYzENjgTQBqjofA5NBRUmoQsTmDOShTdAIDCYR"
		const stringygwFrdN = "I0QGnDI1g4pssK"
		const uintT0bIRSr = BigInt("1260")
		const DipexzKZQYnh = await Dipex.new(stringjCgmnLA, stringygwFrdN, uintT0bIRSr, {from: accounts[1]});
		const uintibHgent = BigInt("0")
		const addressqd1SqZj = accounts[6]
		const boolBxFjKFb = await DipexzKZQYnh.approveAndCall.call(addressqd1SqZj, uintibHgent, {from: accounts[1]});

		assert.equal(boolBxFjKFb, true)
	});
})