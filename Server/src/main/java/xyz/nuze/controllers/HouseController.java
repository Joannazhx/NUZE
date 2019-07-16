package xyz.nuze.controllers;

import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xyz.nuze.error.BusinessException;
import xyz.nuze.model.House;
import xyz.nuze.response.CommonReturnType;
import xyz.nuze.services.HouseService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @CreatyBy Michael
 * @Date 2019-07-16 22:02
 */

@RestController
@RequestMapping(value = "/house")
public class HouseController extends BaseController {

    @Autowired
    HouseService houseService;

    @GetMapping("")
    public CommonReturnType getHouseInfo(
        @ApiParam @RequestParam(value = "offset", defaultValue = "0") Integer offset,
        @ApiParam @RequestParam(value = "limit", defaultValue = "10") Integer limit) throws BusinessException {

        List<House> houseList = houseService.listHouseList(limit, offset);
        return CommonReturnType.create(houseList, "get success");
    }

}
