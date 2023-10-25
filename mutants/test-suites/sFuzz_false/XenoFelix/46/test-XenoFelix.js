const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringIr3Rlp3 = "kv1ffQUxj5HqD50e9yl"
		const stringVibtHWW = "6hiDh1hVFkRqx5zWN0TbUaszPayfdsJKhGwJWlx73DHnXFTlnVAQi6RXiHDqsG4qsQGE6PUPbUtBoV57oqyIPkyNo"
		const uintHrlAjS4 = BigInt("1629")
		const uintI343qCy = BigInt("79")
		const XenoFelixf9uWKn = await XenoFelix.new(stringIr3Rlp3, stringVibtHWW, uintHrlAjS4, uintI343qCy, {from: accounts[4]});
		const uintrw9lXie = BigInt("809")
		const addressnoqeuE2 = accounts[4]
		const addressc04bkFa = accounts[4]
		const addressS08dlE2 = accounts[3]
		const boolWvVgHFn = await XenoFelixf9uWKn.approve.call(addressnoqeuE2, uintrw9lXie, {from: accounts[1]});
//		const addressFYm6UaV = await XenoFelixf9uWKn.transferOwnership.call(addressc04bkFa, {from: accounts[0]});
//		const uint8rjdvTT0 = await XenoFelixf9uWKn.decimals.call({from: accounts[2]});
//		const uint256QI6TFVx = await XenoFelixf9uWKn.balanceOf.call(addressS08dlE2, {from: accounts[5]});
//		await XenoFelixf9uWKn.onlyNewOwner.call({from: accounts[5]});
//		await XenoFelixf9uWKn.renouncePauser.call({from: accounts[2]});

		assert.equal(boolWvVgHFn, true)
		await expect(XenoFelixf9uWKn.transferOwnership.call(addressc04bkFa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixwqXmFz0 = await XenoFelix.new({from: accounts[1]});
		const uintQq9dDGU = BigInt("977")
		const addressG2F0DDC = accounts[2]
		const uintWRdZrQB = BigInt("1268")
		const addressS5AOmP = accounts[1]
		const addressrdnERu1 = accounts[1]
		const boolyfeP5a9 = await XenoFelixwqXmFz0.burnOwner.call(addressG2F0DDC, uintQq9dDGU, {from: accounts[1]});
		await XenoFelixwqXmFz0.onlyPauser.call({from: accounts[2]});
		const boolqEZzgIN = await XenoFelixwqXmFz0.decreaseAllowance.call(addressS5AOmP, uintWRdZrQB, {from: accounts[1]});
		const boolrPLaBTq = await XenoFelixwqXmFz0.isOwner.call(addressrdnERu1, {from: accounts[2]});
		const stringIl4v16E = await XenoFelixwqXmFz0.symbol.call({from: accounts[4]});
		await XenoFelixwqXmFz0.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringnqAC5bZ = "NO8M5JnfwgeeL"
		const stringiWeWeLe = "EKCPa7zWqtjsno9cxOB4UZV43Ur8"
		const uintC1RM92Z = BigInt("24")
		const XenoFelix7vKFGc = await XenoFelix.new(stringnqAC5bZ, stringiWeWeLe, uintC1RM92Z, {from: accounts[4]});
		const uintZUlf6EY = BigInt("855")
		const addresstn5R5TA = accounts[2]
		const addressLxSV1bZ = accounts[2]
		const addressWFl2AIQ = accounts[3]
		await XenoFelix7vKFGc.whenNotPaused.call({from: accounts[2]});
		const boollsslnR = await XenoFelix7vKFGc.transfer.call(addresstn5R5TA, uintZUlf6EY, {from: accounts[1]});
		const addresssdkp0ew = await XenoFelix7vKFGc.removePauser.call(addressLxSV1bZ, {from: accounts[3]});
		const boolngBnRqz = await XenoFelix7vKFGc.unfreezeAccount.call(addressWFl2AIQ, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringGF0AgxW = "jghD7NoRWGT"
		const stringtIWNaHF = "Nz86yes5ueyJOLcPQS1Cc6"
		const uintFVOmT5u = BigInt("1138")
		const uintLwI5MjB = BigInt("16")
		const XenoFelixrIjk5ud = await XenoFelix.new(stringGF0AgxW, stringtIWNaHF, uintFVOmT5u, uintLwI5MjB, {from: "0x0000000000000000000000000000000000000001"});
		const addressma4LVoY = accounts[2]
		const addressxAlhLrx = accounts[2]
		const uintHzB8NH = BigInt("812")
		const addressIOhz61U = accounts[1]
		await XenoFelixrIjk5ud.onlyNewOwner.call({from: accounts[5]});
		const addresscq3d1GQ = await XenoFelixrIjk5ud.addPauser.call(addressma4LVoY, {from: accounts[3]});
		const addresszN4W2m9 = await XenoFelixrIjk5ud.transferOwnership.call(addressxAlhLrx, {from: accounts[2]});
		const boolw6nyXp = await XenoFelixrIjk5ud.unlock.call(addressIOhz61U, uintHzB8NH, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintB9cIhEB = BigInt("1961")
		const uintuaGVuX = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintB9cIhEB, uintuaGVuX, {from: accounts[0]});
		const uintAkitlX3 = BigInt("284")
		const addressrB1evNf = accounts[2]
		const stringytul1s = await XenoFelixL7xAjge.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressrB1evNf, uintAkitlX3, {from: accounts[3]});

		assert.equal(stringytul1s, "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg")
		await expect(XenoFelixL7xAjge.burnFrom.call(addressrB1evNf, uintAkitlX3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringuqxMaWU = "zf1VgDRgsavVHytL3M9hkc2mlvrH2bsRVaMnGCcDWMK59IEdyVqt6GTEwePrWd5SKlIK"
		const stringQqkUkEC = "52ohWIpYESb0zAFJnjpq0FeFppNFcDett5UYGO2tbQePAOBL9YOfEsJQqey6Fz9iIpuUt6lI3LMo2ztRbyPuUJvorv2ft"
		const uintLtIASIo = BigInt("229")
		const XenoFelixsxuT4U7 = await XenoFelix.new(stringuqxMaWU, stringQqkUkEC, uintLtIASIo, {from: accounts[1]});
		const uintM9jVjU1 = BigInt("721")
		const uintGBRf2OI = BigInt("1664")
		const addresswKz3zoE = accounts[2]
		const uintqlfHjaT = BigInt("1873")
		const addressJM8g7On = accounts[4]
		const address0nyr4L = accounts[1]
		const uintNiQQz5V = BigInt("1882")
		const addresssWKiKRd = accounts[4]
		const addressPnuc6PU = accounts[3]
		const boolWAQiaOo = await XenoFelixsxuT4U7.lock.call(addresswKz3zoE, uintGBRf2OI, uintM9jVjU1, {from: "0x0000000000000000000000000000000000000001"});
		const boolb6t50IK = await XenoFelixsxuT4U7.transferFrom.call(address0nyr4L, addressJM8g7On, uintqlfHjaT, {from: accounts[0]});
		const stringiiBnLcD = await XenoFelixsxuT4U7.name.call({from: accounts[3]});
		const boolKKZaXm = await XenoFelixsxuT4U7.transfer.call(addresssWKiKRd, uintNiQQz5V, {from: accounts[2]});
		const addressqomCqWW = await XenoFelixsxuT4U7.notFrozen.call(addressPnuc6PU, {from: accounts[0]});
		await XenoFelixsxuT4U7.renouncePauser.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringqAl4gct = "EHOJ9puup4b1X7soaeP0VWuf3kj5"
		const stringVsa5QxZ = "GvCV7XatmUB2wGe7TmYkj4qb0G6csmGWMAQx6P"
		const uintrgyfF07 = BigInt("102")
		const XenoFelixN2LZfil = await XenoFelix.new(stringqAl4gct, stringVsa5QxZ, uintrgyfF07, {from: accounts[3]});
		const uintOtRXTMi = BigInt("241")
		const addressMlKMbkw = accounts[3]
		const uintLVy1swz = BigInt("719")
		const addressWesUnQs = accounts[4]
		const addressrDtuGd7 = accounts[5]
		const boolpQVkPzB = await XenoFelixN2LZfil.transfer.call(addressMlKMbkw, uintOtRXTMi, {from: accounts[1]});
		const boolJ8j8vKW = await XenoFelixN2LZfil.transfer.call(addressWesUnQs, uintLVy1swz, {from: accounts[4]});
		const addressEVLRK4I = await XenoFelixN2LZfil.removePauser.call(addressrDtuGd7, {from: accounts[4]});
		await XenoFelixN2LZfil.pause.call({from: accounts[3]});
		const booldmXz68M = await XenoFelixN2LZfil.paused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintdypiDlQ = BigInt("1961")
		const uintKpdEan5 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintdypiDlQ, uintKpdEan5, {from: accounts[0]});
		const addressawptnr = accounts[4]
		const addressKHThLJh = accounts[3]
		const uintaWee8q = BigInt("1141")
		const uinteVk2qK3 = BigInt("1410")
		const addressZRCjHQR = accounts[0]
		const uintaKnhoLi = BigInt("284")
		const addressq6rTtsK = accounts[3]
//		const addresssruKppO = await XenoFelixL7xAjge.notFrozenAndTransaction.call(addressKHThLJh, addressawptnr, {from: accounts[2]});
//		const boolJFvmBr5 = await XenoFelixL7xAjge.transferWithLock.call(addressZRCjHQR, uinteVk2qK3, uintaWee8q, {from: accounts[5]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressq6rTtsK, uintaKnhoLi, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.notFrozenAndTransaction.call(addressKHThLJh, addressawptnr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintrheyR3J = BigInt("1961")
		const uintW7AqY60 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintrheyR3J, uintW7AqY60, {from: accounts[0]});
		const addressgRG1rya = accounts[4]
		const uintPJdH3Is = BigInt("1284")
		const uintUeV0URq = BigInt("278")
		const addressUDJAinS = accounts[2]
		const addressvXwhVic = await XenoFelixL7xAjge.transferOwnership.call(addressgRG1rya, {from: accounts[0]});
//		const uint256juLvaa = await XenoFelixL7xAjge.burn.call(uintPJdH3Is, {from: accounts[1]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressUDJAinS, uintUeV0URq, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.burn.call(uintPJdH3Is, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintNdJlFR6 = BigInt("1961")
		const uintzUp4N1 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintNdJlFR6, uintzUp4N1, {from: accounts[0]});
		const uintSn0tWDN = BigInt("1980")
		const uinteojpLR = BigInt("1509")
		const addressFig1Eoe = accounts[3]
		const uintkdd8Reh = BigInt("284")
		const addresse4uhJeT = accounts[3]
		const boolbEpYN4n = await XenoFelixL7xAjge.transferWithLock.call(addressFig1Eoe, uinteojpLR, uintSn0tWDN, {from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addresse4uhJeT, uintkdd8Reh, {from: accounts[3]});

		assert.equal(boolbEpYN4n, true)
		await expect(XenoFelixL7xAjge.burnFrom.call(addresse4uhJeT, uintkdd8Reh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintBc1cjuR = BigInt("1961")
		const uintvOhyy2 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintBc1cjuR, uintvOhyy2, {from: accounts[0]});
		const addressyPjUwYq = accounts[0]
		const uintKHrU064 = BigInt("284")
		const addressLjQWeKJ = accounts[3]
		const uint256g4vQKrv = await XenoFelixL7xAjge.balanceOf.call(addressyPjUwYq, {from: accounts[5]});
//		await XenoFelixL7xAjge.renouncePauser.call({from: accounts[4]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressLjQWeKJ, uintKHrU064, {from: accounts[3]});

		assert.equal(uint256g4vQKrv, BigInt("76370417254352642675166245418103869731899927783527441904158915732970139549696"))
		await expect(XenoFelixL7xAjge.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintsEMicw1 = BigInt("1961")
		const uintAI7SXyi = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintsEMicw1, uintAI7SXyi, {from: accounts[0]});
		const uintV0LIHMA = BigInt("364")
		const addressTCA63X = accounts[3]
		const uintW4QaSTt = BigInt("448")
		const addresspLMPZX = accounts[2]
//		const boolDpNFiq = await XenoFelixL7xAjge.transfer.call(addressTCA63X, uintV0LIHMA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addresspLMPZX, uintW4QaSTt, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.transfer.call(addressTCA63X, uintV0LIHMA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintHs38AJy = BigInt("1961")
		const uintYtu95xj = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintHs38AJy, uintYtu95xj, {from: accounts[0]});
		const addressAn1dgVV = accounts[3]
		const uintLRVsUyI = BigInt("298")
		const addressEmkDSrc = accounts[3]
//		const boolBTUXd5B = await XenoFelixL7xAjge.unfreezeAccount.call(addressAn1dgVV, {from: accounts[1]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressEmkDSrc, uintLRVsUyI, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.unfreezeAccount.call(addressAn1dgVV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintVjLWs04 = BigInt("1961")
		const uinto4OaBng = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintVjLWs04, uinto4OaBng, {from: accounts[0]});
		const uintG4PdPQd = BigInt("306")
		const addressjFvAW0M = accounts[3]
		const uint8eAjdfCb = await XenoFelixL7xAjge.decimals.call({from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressjFvAW0M, uintG4PdPQd, {from: accounts[3]});

		assert.equal(uint8eAjdfCb, BigInt("120"))
		await expect(XenoFelixL7xAjge.burnFrom.call(addressjFvAW0M, uintG4PdPQd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintnPSL67m = BigInt("1961")
		const uintSwEiKgV = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintnPSL67m, uintSwEiKgV, {from: accounts[0]});
		const uintNHSfE3X = BigInt("298")
		const addressSurbPbb = accounts[3]
		const stringrWcASkX = await XenoFelixL7xAjge.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressSurbPbb, uintNHSfE3X, {from: accounts[3]});

		assert.equal(stringrWcASkX, "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe")
		await expect(XenoFelixL7xAjge.burnFrom.call(addressSurbPbb, uintNHSfE3X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uinthpfy3v = BigInt("1961")
		const uintxeHccNw = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uinthpfy3v, uintxeHccNw, {from: accounts[0]});
		const uintPoATSbc = BigInt("309")
		const addressWwIKsXM = accounts[2]
		const uint256lNWaT5 = await XenoFelixL7xAjge.totalSupply.call({from: accounts[1]});
//		await XenoFelixL7xAjge.onlyPauser.call({from: accounts[1]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressWwIKsXM, uintPoATSbc, {from: accounts[3]});

		assert.equal(uint256lNWaT5, BigInt("76370417254352642675166245418103869731899927783527441904158915732970139549696"))
		await expect(XenoFelixL7xAjge.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintWCRRHK3 = BigInt("1961")
		const uintZAHs7zY = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintWCRRHK3, uintZAHs7zY, {from: accounts[0]});
		const addressx3sxGya = accounts[4]
		const uinta7CLsH5 = BigInt("936")
		const uintnVuXOxx = BigInt("656")
		const addressItYoZ5X = accounts[1]
		const uintrS5rUA3 = BigInt("284")
		const addressTyvzy0x = accounts[3]
		const addressDmA7Z3b = await XenoFelixL7xAjge.addPauser.call(addressx3sxGya, {from: accounts[0]});
//		const boolXpQy2Uf = await XenoFelixL7xAjge.transferWithLock.call(addressItYoZ5X, uintnVuXOxx, uinta7CLsH5, {from: accounts[1]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressTyvzy0x, uintrS5rUA3, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.transferWithLock.call(addressItYoZ5X, uintnVuXOxx, uinta7CLsH5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintBp7EylK = BigInt("1961")
		const uinty1qpDWY = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintBp7EylK, uinty1qpDWY, {from: accounts[0]});
		const uintELibjG = BigInt("1355")
		const addressVRdsVqA = accounts[4]
		const uintu9EUpHl = BigInt("297")
		const addresso7O5mol = accounts[2]
		const uint256tE7ku7 = await XenoFelixL7xAjge.burn.call(uintELibjG, {from: accounts[0]});
//		const boolP7W18x2 = await XenoFelixL7xAjge.unfreezeAccount.call(addressVRdsVqA, {from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addresso7O5mol, uintu9EUpHl, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.unfreezeAccount.call(addressVRdsVqA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintnhyzTB1 = BigInt("1961")
		const uintFmpvVZP = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintnhyzTB1, uintFmpvVZP, {from: accounts[0]});
		const uintdEZgcRe = BigInt("1823")
		const addressCDKvf5U = accounts[5]
		const addressPxTSagV = accounts[2]
		const uintGOdA2As = BigInt("1859")
		const addressLqVzcE = accounts[4]
		const uintnPNkBgz = BigInt("284")
		const addressoBW6kDv = accounts[3]
//		const boolHn7sf27 = await XenoFelixL7xAjge.transferFrom.call(addressPxTSagV, addressCDKvf5U, uintdEZgcRe, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo0UZtJB = await XenoFelixL7xAjge.transfer.call(addressLqVzcE, uintGOdA2As, {from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressoBW6kDv, uintnPNkBgz, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.transferFrom.call(addressPxTSagV, addressCDKvf5U, uintdEZgcRe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintgDVK05K = BigInt("1961")
		const uintcr7vEWy = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintgDVK05K, uintcr7vEWy, {from: accounts[0]});
		const uintumBXTTi = BigInt("1759")
		const addresswYThFVS = accounts[5]
		const addressPuHnrYP = accounts[0]
		const uintUL3PB6 = BigInt("284")
		const addressliiFXt3 = accounts[4]
		const boolEKEmYbu = await XenoFelixL7xAjge.increaseAllowance.call(addresswYThFVS, uintumBXTTi, {from: accounts[1]});
		const uint256g4vQKrv = await XenoFelixL7xAjge.balanceOf.call(addressPuHnrYP, {from: accounts[5]});
//		await XenoFelixL7xAjge.renouncePauser.call({from: accounts[4]});
//		await XenoFelixL7xAjge.pause.call({from: accounts[4]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressliiFXt3, uintUL3PB6, {from: accounts[3]});

		assert.equal(boolEKEmYbu, true)
		assert.equal(uint256g4vQKrv, BigInt("76370417254352642675166245418103869731899927783527441904158915732970139549696"))
		await expect(XenoFelixL7xAjge.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintNDOBCq = BigInt("1961")
		const uintofDQazm = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintNDOBCq, uintofDQazm, {from: accounts[0]});
		const addressvQLFka9 = accounts[1]
		const uint256g4vQKrv = await XenoFelixL7xAjge.balanceOf.call(addressvQLFka9, {from: accounts[5]});
		const boolpZe7LYE = await XenoFelixL7xAjge.paused.call({from: accounts[0]});

		assert.equal(boolpZe7LYE, false)
		assert.equal(uint256g4vQKrv, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringSzgF1eW = "MaqgB1jNthe1lrzms58B11cyxpTCzKecLpJqgLTQJysDG"
		const stringt4NO36R = "c5vXlKVuhOiDMGDyUBNkjZBJ6JFfTCajIwF3kK2SBV5joI61Oar"
		const uinty3HWEOT = BigInt("150")
		const XenoFelixPEuIZtu = await XenoFelix.new(stringSzgF1eW, stringt4NO36R, uinty3HWEOT, {from: accounts[2]});
		const uintiOrdltX = BigInt("1986")
		const addressWi4VOXY = accounts[3]
		const addressuvVTKf3 = accounts[3]
		const addressCuaOoqP = accounts[1]
		const addressSbh2X1 = await XenoFelixPEuIZtu.burnFrom.call(addressWi4VOXY, uintiOrdltX, {from: accounts[2]});
		const addressBbR0ACn = await XenoFelixPEuIZtu.transferOwnership.call(addressuvVTKf3, {from: accounts[1]});
		const addressDv1zKX6 = await XenoFelixPEuIZtu.removePauser.call(addressCuaOoqP, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintue3RWZ = BigInt("1961")
		const uintxEzQsF4 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintue3RWZ, uintxEzQsF4, {from: accounts[0]});
		const uintg34MeIr = BigInt("137")
		const addressr6EJJJi = accounts[3]
		const addressl5laPb = accounts[2]
		const uintmkx6F2 = BigInt("353")
		const addressbsL7hhY = accounts[4]
//		const boolRl0at9 = await XenoFelixL7xAjge.decreaseAllowance.call(addressr6EJJJi, uintg34MeIr, {from: accounts[5]});
//		const uint256botWzsV = await XenoFelixL7xAjge.balanceOf.call(addressl5laPb, {from: accounts[0]});
//		const boolDpNFiq = await XenoFelixL7xAjge.transfer.call(addressbsL7hhY, uintmkx6F2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixL7xAjge.decreaseAllowance.call(addressr6EJJJi, uintg34MeIr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintSbfnUwf = BigInt("1961")
		const uint2Zkofh = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintSbfnUwf, uint2Zkofh, {from: accounts[0]});
		const uintkNNahZ = BigInt("156")
		const addressVOoXAtu = accounts[4]
		const addressKZHCd5 = accounts[1]
		const uintwFf1Mtm = BigInt("1022")
		const addressWXdEHSZ = accounts[2]
		const boolW9buN9F = await XenoFelixL7xAjge.approve.call(addressVOoXAtu, uintkNNahZ, {from: accounts[2]});
		const boolTgiCQJf = await XenoFelixL7xAjge.freezeAccount.call(addressKZHCd5, {from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressWXdEHSZ, uintwFf1Mtm, {from: accounts[3]});

		assert.equal(boolTgiCQJf, true)
		assert.equal(boolW9buN9F, true)
		await expect(XenoFelixL7xAjge.burnFrom.call(addressWXdEHSZ, uintwFf1Mtm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringMRt1r7Z = "hxsNhqB4o7wsCrbaBEc3BWBPYMqFXozD0OglrSrRkBrIkA3M7J9fWN78F5j3J0Z8pxR"
		const stringmPTTN4Z = "MxFaYnVMMw1ElIvLuzq4PTgEMPLU8RkusAKRGQv5CH5DFZBVNQXcM3aEKAxJ3Hufl8JpDnUx"
		const uintYLtUVjU = BigInt("70")
		const XenoFelixBkwlsdV = await XenoFelix.new(stringMRt1r7Z, stringmPTTN4Z, uintYLtUVjU, {from: accounts[5]});
		const uinteGeVp2o = BigInt("1015")
		const addressGwUBexm = accounts[5]
		const uintEBWGflF = BigInt("233")
		const addressyJpXP45 = "0x0000000000000000000000000000000000000001"
		const addressaMpq9nQ = accounts[2]
		const uintOYiBRjj = BigInt("1677")
		const uintORgYmYv = BigInt("169")
		const addressxaL4Zey = accounts[0]
		const addresswpEgN4f = accounts[0]
		const uint256fAk0MBn = await XenoFelixBkwlsdV.burn.call(uinteGeVp2o, {from: accounts[0]});
		const boolGR9qnw9 = await XenoFelixBkwlsdV.isOwner.call(addressGwUBexm, {from: accounts[4]});
		const boolzzqAuO = await XenoFelixBkwlsdV.transferFrom.call(addressaMpq9nQ, addressyJpXP45, uintEBWGflF, {from: accounts[4]});
		const boolROd2zHN = await XenoFelixBkwlsdV.transferWithLock.call(addressxaL4Zey, uintORgYmYv, uintOYiBRjj, {from: accounts[3]});
		const addressp9m8EBP = await XenoFelixBkwlsdV.transferOwnership.call(addresswpEgN4f, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringFmHlaes = "jno8HqbAFh2p9RLjTemEXhGHwQbK"
		const stringlWLdnpK = "YknIHocQgrScn61KunlP11u9Qe9zu7suilD9g6pBMBBTHfmXLaFAz9Q9WjcNe3CNxkW3M8klxWxpPA7wHwqPyGC4jTlsmB3"
		const uintzA2WT01 = BigInt("84")
		const XenoFelix8nVByz = await XenoFelix.new(stringFmHlaes, stringlWLdnpK, uintzA2WT01, {from: accounts[0]});
		const uintBsPWfgc = BigInt("1120")
		const addressASzstDi = accounts[2]
		const addressZDL16ly = accounts[3]
		await XenoFelix8nVByz.renouncePauser.call({from: accounts[1]});
		const stringuk8IgBE = await XenoFelix8nVByz.symbol.call({from: accounts[3]});
		const uint256Z3dI4yU = await XenoFelix8nVByz.totalSupply.call({from: accounts[3]});
		const uint8Tgm3AjO = await XenoFelix8nVByz.decimals.call({from: accounts[3]});
		const boolJDY71LH = await XenoFelix8nVByz.transfer.call(addressASzstDi, uintBsPWfgc, {from: accounts[1]});
		const addressyvGjLjq = await XenoFelix8nVByz.addPauser.call(addressZDL16ly, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintavBvuwL = BigInt("1961")
		const uintAHTQYQu = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintavBvuwL, uintAHTQYQu, {from: accounts[0]});
		const addresscuMCwJ = accounts[2]
		const addressCjQq9AO = accounts[0]
		const addressSQRofRi = "0x0000000000000000000000000000000000000001"
		const uint256g4vQKrv = await XenoFelixL7xAjge.balanceOf.call(addresscuMCwJ, {from: accounts[5]});
		const uint256t4VCM6 = await XenoFelixL7xAjge.allowance.call(addressSQRofRi, addressCjQq9AO, {from: accounts[4]});

		assert.equal(uint256g4vQKrv, BigInt("0"))
		assert.equal(uint256t4VCM6, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintdjymyK3 = BigInt("1961")
		const uintNdTPfC6 = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintdjymyK3, uintNdTPfC6, {from: accounts[0]});
		const addressQEk3Jn9 = accounts[2]
		const uintem6QsPR = BigInt("284")
		const addressKblNVNU = accounts[3]
//		const addressdoS6ryr = await XenoFelixL7xAjge.removePauser.call(addressQEk3Jn9, {from: accounts[0]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressKblNVNU, uintem6QsPR, {from: accounts[3]});

		await expect(XenoFelixL7xAjge.removePauser.call(addressQEk3Jn9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintGEnLgL2 = BigInt("1961")
		const uint8L4pfx = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintGEnLgL2, uint8L4pfx, {from: accounts[0]});
		const addresspEiaDNS = accounts[0]
		const addressEhWFCA0 = accounts[1]
		const uintx02rvXh = BigInt("282")
		const addressM0108BX = accounts[2]
		const boolZ9zi3he = await XenoFelixL7xAjge.isOwner.call(addresspEiaDNS, {from: accounts[1]});
		const boolxZQ9ZwF = await XenoFelixL7xAjge.isPauser.call(addressEhWFCA0, {from: accounts[1]});
//		const addressGzzWXjU = await XenoFelixL7xAjge.burnFrom.call(addressM0108BX, uintx02rvXh, {from: accounts[3]});

		assert.equal(boolZ9zi3he, true)
		assert.equal(boolxZQ9ZwF, false)
		await expect(XenoFelixL7xAjge.burnFrom.call(addressM0108BX, uintx02rvXh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringkIMWPss = "w59t4N3Kr9uGtJysZ2cylsfLrzP47Uow6TwRrXxJvdVOBZ5OTuy1FAS1QHyx6kgUhn8xQJ1caKJ1O1Uwe"
		const stringineSk12 = "hXph5VWj6yJhMOa3Afmm1vQPRmik6YJCEPCD8q6rKxPOg"
		const uintDMy6Ip = BigInt("1961")
		const uintffobNO = BigInt("120")
		const XenoFelixL7xAjge = await XenoFelix.new(stringkIMWPss, stringineSk12, uintDMy6Ip, uintffobNO, {from: accounts[0]});
		const addressyAcoQlA = accounts[2]
		const uintuOecYjn = BigInt("1366")
		const addressHRBjVry = accounts[3]
		const uint256g4vQKrv = await XenoFelixL7xAjge.balanceOf.call(addressyAcoQlA, {from: accounts[5]});
//		const boolBWU3lg = await XenoFelixL7xAjge.burnOwner.call(addressHRBjVry, uintuOecYjn, {from: accounts[0]});

		assert.equal(uint256g4vQKrv, BigInt("0"))
		await expect(XenoFelixL7xAjge.burnOwner.call(addressHRBjVry, uintuOecYjn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringgy58Aog = "3TrPfI49tD7rSiylOxT5Mo1RyEWDO66FiD0EGb34O7FQyVDk5tSJD8qg8B"
		const stringxkGkgy6 = "UVvpQ1CoH3h6r"
		const uinty0qm9g5 = BigInt("54")
		const XenoFelix0yAMky = await XenoFelix.new(stringgy58Aog, stringxkGkgy6, uinty0qm9g5, {from: "0x0000000000000000000000000000000000000001"});
		const addressSwdVC2e = "0x0000000000000000000000000000000000000001"
		const addressgnv38Z1 = accounts[0]
		const addresstDRiSsD = await XenoFelix0yAMky.addPauser.call(addressSwdVC2e, {from: accounts[4]});
		const boolNf5V3Fq = await XenoFelix0yAMky.freezeAccount.call(addressgnv38Z1, {from: accounts[3]});
	});
})